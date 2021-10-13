<?php

namespace App\Http\Controllers;
use Tymon\JWTAuth\JWTAuth;
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
    private $jwtAuth;

    function __construct( JWTAuth $jwtAuth)
    {
        $this->documentosCliente = new DocumentosCliente();
        $this->jwtAuth = $jwtAuth;
    }

    public function index(Request $request, $setor)
    {
        try {
            error_log($setor);
            $data = $this->documentosCliente->getAll($request->all(), $setor);
            return response()->json($data, 200);
        } catch (\Exception $e) {
            \App\Model\Log::create(['message' => $e->getMessage()]);
            return response()->json(['message' => 'Ocorreu um problema ao listar documentos'], 500);
        }
    }

    public function downloadFile($fileName)
    {
        $file_path = storage_path('/app/documentos/' . $fileName);
        return response()->download($file_path);
    }

    public function getByTipo($id, $userLogged) {
        try {
            $dados = $this->documentosCliente->getByTipo($id, $userLogged);
            return response()->json($dados, 200);
        }catch(\Exception $e) {
            \App\Model\Log::create(['message' => $e]);
            return response()->json(['message' => 'Não foi possível localizar dados. Por vavor tente novamente'], 500);
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
                    return response()->json(['message' => 'Documento enviado com sucesso.'], 200);
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
        try {
            $data = $this->documentosCliente->getById($id);
            return response()->json($data, 200);
        } catch (\Exception $e) {
            \App\Model\Log::create(['message' => $e->getMessage()]);
            return response()->json(['message' => 'Ocorreu um problema ao buscar dados.']);
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
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $nameFile = null;
            $dados = $request->all();
            unset($dados['_method']);
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
            }

            unset($dados['arquivo']);

            $this->documentosCliente->atualizar($dados, $id);
            return response()->json(['message' => 'Documento atualizado com sucesso.'], 200);
        } catch (\Exception $e) {
            \App\Model\Log::create(['message' => $e->getMessage()]);
            return response()->json(['message' => 'Ocorreu um erro ao atualizar dados. Por favor tente novamente.'], 500);
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
        try {
            \App\Model\DocumentosCliente::destroy($id);
            return response()->json(['message' => 'Documento excluído com sucesso']);
        } catch (\Exception $e) {
            \App\Model\Log::create(['message' => $e->getMessage()]);
            return response()->json(['message' => 'Ocorreu um problema ao excluir documento']);
        }
    }
}
