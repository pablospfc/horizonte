<?php


namespace App\Model;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\Types\Self_;

class DocumentosCliente extends Model
{
    protected $table = "documentos_cliente";
    protected $primaryKey = "id";
    public $incrementing = true;
    public $timestamps = true;

    protected $fillable = [
        "id_tipo_documento",
        "id_cliente",
        "id_mes",
        "descricao",
        "ano",
        "nome_arquivo",
        "md5_arquivo"
    ];

    public function salvar($data) {
        return self::create($data);
    }
}