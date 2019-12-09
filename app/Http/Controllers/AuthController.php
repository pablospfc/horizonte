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
            return response()->json(['error' => 'Não foi possível acessar o sistema. Verifique se seus dados estejam corretos.'], 401);
        }

        $user = $this->jwtAuth->authenticate($token);

        if ($user['id_perfil'] == 3) {
            $data = \App\Model\Clientes::where('id', $user['id_cliente'])
                ->get()
                ->first()
                ->toArray();

            if ($data['id_status_cliente'] == 2) {
                return response()->json(['error' => 'O Horizonte Contabilidade está validando seus dados. Por favor, aguarde.'], 401);
            } elseif ($data['id_status_cliente'] == 3) {
                return response()->json(['error' => 'Você não tem permissão para acessar a Área do Cliente. Esta área do site é exclusiva para clientes.'], 401);
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

    public function me()
    {
        if (!$user = $this->jwtAuth->parseToken()->authenticate()) {
            return response()->json(['error' => 'user_not_found'], 404);
        }

        return response()->json(compact('user'));
    }
}
