<?php


namespace App\Http\Controllers;

use App\Model\TiposDocumentos;

class TiposDocumentosController extends Controller
{
    private $tipoDocumentos;

    function __construct()
    {
        $this->tipoDocumentos = new TiposDocumentos();
    }

     public function index(){
         try {
             $data = \App\Model\TiposDocumentos::all();
             return response()->json($data,200);
         }catch(\Exception $e) {
             \App\Model\Log::create(['message' => $e->getMessage()]);
             return response()->json(['message' => 'Ocorreu um problema ao listar dados'],500);
         }
     }

     public function getByUserSetor($setor){
              try {
                  if ($setor == 0) {
                      $data = \App\Model\TiposDocumentos::all();
                  } else {
                      $data = $this->tipoDocumentos->getByUserSetor($setor);
                  }
                  return response()->json($data,200);
              }catch(\Exception $e) {
                  \App\Model\Log::create(['message' => $e->getMessage()]);
                  return response()->json(['message' => 'Ocorreu um problema ao listar dados'],500);
              }
          }
}
