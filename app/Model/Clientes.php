<?php


namespace App\Model;
use Illuminate\Database\Eloquent\Model;

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
            ->get()
            ->toArray();
    }

}