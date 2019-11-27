<?php

namespace App\Http\Controllers;

use App\Model\DocumentosCliente;
use Illuminate\Http\Request;

class DocumentosClienteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    private $documentosCliente;

    function __construct()
    {
        $this->documentosCliente = new DocumentosCliente();
    }

    public function index()
    {
        //
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
        try {
            $nameFile = null;
            $dados = $request->all();
            // Verifica se informou o arquivo e se é válido
            if ($request->hasFile('arquivo') && $request->file('arquivo')->isValid()) {

                // Define um aleatório para o arquivo baseado no timestamps atual
                $name = uniqid(date('HisYmd'));

                // Recupera a extensão do arquivo
                $extension = $request->arquivo->extension();

                // Define finalmente o nome
                $nameFile = "{$name}.{$extension}";

                // Faz o upload:
                $upload = $request->arquivo->storeAs('documentos', $nameFile);
                // Se tiver funcionado o arquivo foi armazenado em storage/app/public/categories/nomedinamicoarquivo.extensao

                $dados['nome_arquivo'] = $request->arquivo->getClientOriginalName();
                $dados['md5_arquivo'] = $nameFile;
                unset($dados['arquivo']);
                if ($upload) {
                    $this->documentosCliente->salvar($dados);
                    return response()->json(['message' => 'Documentos enviados com sucesso'], 200);
                }
            }

        } catch (\Exception $e) {
            \App\Model\Log::create(['message' => $e->getMessage()]);
            return response()->json(['message' => 'Ocorreu um problema ao enviar documentos. Por favor tente novamente'], 500);
        }
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
