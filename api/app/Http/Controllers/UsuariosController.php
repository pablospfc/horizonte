<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UsuariosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        try {
            $dados = \App\Model\User::join("perfis", "users.id_perfil", "perfis.id")
                ->where("users.id_perfil", "<>", 1)
                ->select("perfis.nome as perfil", "users.*")
                ->orderBy("users.name", "asc")
                ->get();
            return response()->json($dados,200);
        }catch (\Exception $e) {
            \App\Model\Log::create(['message' => $e->getMessage()]);
            return response()->json("Erro ao listar dados de usuários.",500);
        }
    }

    public function createPassword(Request $request) {
        $dados = $request->all();
        return bcrypt($dados['password']);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        try {
            $dados = \App\Model\User::find($id);
            return response()->json($dados,200);
        }catch (\Exception $e) {
            \App\Model\Log::create(['message' => $e->getMessage()]);
            return response()->json("Erro ao listar dados de usuários.",500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        try {
            $dados = $request->all();

            if (isset($dados['password'])) {
                $dados['password'] = bcrypt($dados['password']);
                unset($dados['confirm_password']);
                unset($dados['altera_senha']);
            }

            \App\Model\User::where("id", $id)
                ->update($dados);

            return response()->json(['message' => 'Dados atualizados com sucesso.'],200);
        }catch (\Exception $e) {
            \App\Model\Log::create(['message' => $e->getMessage()]);
            return response()->json("Erro ao atualizar dados de usuários.",500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
