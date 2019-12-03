<?php


namespace App\Model;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

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
            self::create($dados);


        });
    }

}