<?php


namespace App\Model;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class Clientes extends Model
{
    protected $table = "clientes";
    protected $primaryKey = "id";
    public $incrementing = true;
    public $timestamps = true;

    protected $fillable = [
        "razao_social",
        "responsavel",
        "cnpj",
        "telefone"
    ];

    public function getAll() {
        return self::select(
            "cl.*",
            "st.nome as status"
        )
            ->from("clientes as cl")
            ->join("status_cliente as st", "cl.id_status_cliente", "=", "st.id")
            ->orderBy("cl.responsavel")
            ->get()
            ->toArray();
    }

    public function salvar($dados) {
        DB::transaction(function () use ($dados) {
            $idCliente = self::create([
                'razao_social' => $dados['razao_social'],
                'responsavel'  => $dados['responsavel'],
                'cnpj'         => $dados['cnpj'],
                'telefone'     => $dados['telefone']
            ])->id;
            return User::create([
               'id_perfil'  => 3,
               'id_cliente' => $idCliente,
               'name'       => $dados['responsavel'],
               'login'      => $dados['cnpj'],
               'email'      => $dados['email'],
               'password'      => bcrypt($dados['password'])
            ]);

        });
    }

    public function checkCNPJ($cnpj) {
        $data = self::where('cnpj', $cnpj)
            ->get()
            ->toArray();
        if (!empty($data) && is_array($data)){
            return false; //allow
        }

        return true; //decline
    }

}