<?php


namespace App\Model;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\Types\Self_;
use Tymon\JWTAuth\JWTAuth;
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

    public function getAll() {
        return self::select(
            "doc.*",
            "mes.nome as mes",
            "tdc.nome as tipo_documento",
            "cli.responsavel as cliente"
        )
            ->from("documentos_cliente as doc")
            ->leftJoin("meses as mes", "doc.id_mes", "=" , "mes.id")
            ->join("clientes as cli", "doc.id_cliente", "=" , "cli.id")
            ->join("tipos_documentos as tdc", "doc.id_tipo_documento", "=" , "tdc.id")
            ->get()
            ->toArray();
    }

    public function getById($id, $user) {
        return self::select(
            "doc.*",
            "mes.nome as mes",
            "tdc.nome as tipo_documento",
            "cli.responsavel as cliente"
        )
            ->from("documentos_cliente as doc")
            ->leftJoin("meses as mes", "doc.id_mes", "=" , "mes.id")
            ->join("clientes as cli", "doc.id_cliente", "=" , "cli.id")
            ->join("tipos_documentos as tdc", "doc.id_tipo_documento", "=" , "tdc.id")
            ->join("users as usr", "cli.id", "=" , "usr.id_cliente")
            ->where('usr.id', $user)
            ->where('doc.id_tipo_documento', $id)
            ->get()
            ->toArray();
    }

    public function salvar($data) {
        return self::create($data);
    }

    public function atualizar($data, $id) {
        return self::where('id', $id)
            ->update($data);
    }
}