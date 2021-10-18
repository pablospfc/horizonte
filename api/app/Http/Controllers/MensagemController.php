<?php

namespace App\Http\Controllers;

use App\Model\Mensagem;
use Illuminate\Http\Request;

class MensagemController extends Controller
{
    private $mensagem;

    function __construct()
    {
        $this->mensagem = new Mensagem();
    }

    public function enviar(Request $request) {

        try {
            $this->mensagem->sendMail($request->all());
            return response()->json(['message' => 'Sua mensagem foi enviada com sucesso'],200);
        }catch(\Exception $e) {
            \App\Model\Log::create(['message' => $e->getMessage()]);
            return response()->json(['message' => 'Ocorreu um problema ao enviar mensagem'],500);
        }

}
}
