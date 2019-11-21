<?php

namespace App\Http\Controllers;

use App\Model\Clientes;
use Illuminate\Http\Request;

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

    public function index()
    {
        try {
            $dados = $this->clientes->getAll();
            return response()->json($dados, 200);
        } catch (\Exception $e) {
            \App\Model\Log::create(['message' => $e->getMessage()]);
            return response()->json(['message' => 'Ocorreu um problema ao listar dados'], 500);
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
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
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
