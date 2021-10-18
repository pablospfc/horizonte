<?php

namespace App\Http\Controllers;

use App\Model\Clientes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ClientesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    private $clientes;

    public function __construct()
    {
        $this->clientes = new Clientes();
    }

    public function index(Request $request)
    {
        try {
            $dados = $this->clientes->getAll($request->all());
            return response()->json($dados, 200);
        } catch (\Exception $e) {
            \App\Model\Log::create(['message' => $e->getMessage()]);
            return response()->json(['message' => 'Ocorreu um problema ao listar dados'], 500);
        }
    }

    public function listarAprovados() {
        try {
            $data = \App\Model\Clientes::where('id_status_cliente', 1)
                ->get();
            return response()->json($data,200);
        }catch(\Exception $e) {
          \App\Model\Log::create(['message' => $e->getMessage()]);
          return response()->json(['message' => 'Não foi possível listar dados. Por favor tente novamente'],500);
        }
    }

    public function avaliar(Request $request, $id)
    {
        try {
            $data = $request->all();
            if ($data['id_status_cliente'] <> 1)
                $idStatusCliente = 1;
            else
                $idStatusCliente = 2;

            \App\Model\Clientes::where('id', $id)
                ->update(['id_status_cliente' => $idStatusCliente]);

            return response()->json(['message' => 'O cliente foi aprovado com sucesso.'], 200);
        } catch (\Exception $e) {
            \App\Model\Log::create(['message' => $e->getMessage()]);
            return response()->json(['message' => 'Ocorreu um erro ao aprovar cliente. Por favor tente novamente'], 500);
        }
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
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        try {
            $data = $request->all();
            if (!$this->clientes->checkCNPJ($data['cnpj'])){
                return response()->json(['message' => 'CNPJ já cadastrado no sistema.'],401);
            }
            $this->clientes->salvar($request->all());
            return response()->json(['message' => 'Sua solicitação de cadastro foi realizada com sucesso. Aguarde a aprovação do Horizonte Contabilidade.'],200);
        }catch(\Exception $e) {
            \App\Model\Log::create(['message' => $e->getMessage()]);
            return response()->json(['message' => 'Ocorreu um problema ao realizar sua solicitação de cadastro. Tente novamente.'],500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        try {
            $data = \App\Model\Clientes::find($id);
            return response()->json($data,200);
        }catch(\Exception $e) {
            \App\Model\Log::create(['message' => $e->getMessage()]);
            return response()->json(['message' => 'Erro ao buscar cliente. Tente novamente'],500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        try {
            $this->clientes->atualizar($request->all(), $id);
            return response()->json(['message' => 'Atualizado com sucesso'],200);
        }catch(\Exception $e) {
            \App\Model\Log::create(['message' => $e->getMessage()]);
            return response()->json(['message' => 'Erro ao atualizar cliente. Tente novamente'],500);
    }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
