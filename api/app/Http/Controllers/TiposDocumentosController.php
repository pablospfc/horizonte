<?php


namespace App\Http\Controllers;


class TiposDocumentosController extends Controller
{
     public function index(){
         try {
             $data = \App\Model\TiposDocumentos::all();
             return response()->json($data,200);
         }catch(\Exception $e) {
             \App\Model\Log::create(['message' => $e->getMessage()]);
             return response()->json(['message' => 'Ocorreu um problema ao listar dados'],500);
         }
     }
}