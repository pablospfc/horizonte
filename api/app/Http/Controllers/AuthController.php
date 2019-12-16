<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\JWTAuth;

class AuthController extends Controller
{
    private $jwtAuth;

    public function __construct(JWTAuth $jwtAuth)
    {
        $this->jwtAuth = $jwtAuth;
    }

    public function login(Request $request)
    {

        $credentials = $request->only('login', 'password');

        // attempt to verify the credentials and create a token for the user
        if (!$token = $this->jwtAuth->attempt($credentials)) {
            return response()->json(['error' => 'Não foi possível acessar o sistema. Verifique se seus dados estão corretos.'], 401);
        }

        $user = $this->jwtAuth->authenticate($token);

        if ($user['id_perfil'] == 3) {
            $data = \App\Model\Clientes::where('id', $user['id_cliente'])
                ->get()
                ->first()
                ->toArray();

            if ($data['id_status_cliente'] == 3) {
                return response()->json(['error' => 'O Horizonte Contabilidade está validando seus dados. Por favor, aguarde.'], 401);
            } elseif ($data['id_status_cliente'] == 2) {
                return response()->json(['error' => 'Você não tem permissão para acessar esta área. Esta área do site é exclusiva para clientes.'], 401);
            }
        }

        return response()->json(compact('token', 'user'));
    }

    public function refresh()
    {
        $token = $this->jwtAuth->getToken();
        $token = $this->jwtAuth->refresh($token);

        return response()->json(compact('token'));
    }

    public function logout()
    {
        $token = $this->jwtAuth->getToken();
        $this->jwtAuth->invalidate($token);
        return response()->json(['logout']);
    }

    public function atualizar(Request $request, $id) {
        try {
            $data = $request->all();
            $data['password'] = bcrypt($data['password']);
            \App\Model\User::where('id', $id)
                ->update($data);
            return response()->json(['message' => 'Seus dados foram atualizados com sucesso.'], 200);
        }catch(\Exception $e) {
         \App\Model\Log::create(['message' => $e->getMessage()] );
         return response()->json(['message' => 'Ocorreu um problema ao atualizar seus dados. Por favor tente novamente']);
        }
    }

    public function me()
    {
        if (!$user = $this->jwtAuth->parseToken()->authenticate()) {
            return response()->json(['error' => 'user_not_found'], 404);
        }

        return response()->json(compact('user'));
    }
}
