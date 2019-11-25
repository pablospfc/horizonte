<?php


namespace App\Http\Controllers;


class MesesController extends Controller
{
    public function index() {
        try {
            $data = \App\Model\Mes::all();
            return response()->json($data,200);
        }catch(\Exception $e) {
            \App\Model\Log::create(['message' => $e->getMessage()]);
            return response()->json(['message' => 'Não foi possível listar os dados. Por favor tente novamnete'], 500);
        }
    }

}