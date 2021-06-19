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
        "id_documento",
        "id_cliente",
        "id_mes",
        "descricao",
        "ano",
        "nome_arquivo",
        "md5_arquivo"
    ];

    public function getAll($params)
    {
        $cliente = false;
        $tipoDocumento = false;
        $documento = false;
        $mes = false;
        $ano = false;

        if (isset($params['id_cliente']))
            $cliente = true;
        if (isset($params['id_tipo_documento']))
            $tipoDocumento = true;
        if (isset($params['id_documento']))
            $documento = true;
        if (isset($params['id_mes']))
            $mes = true;
        if (isset($params['ano']))
            $ano = true;

        return self::select(
            "dcl.*",
            "mes.nome as mes",
            "tpd.nome as tipo_documento",
            "doc.nome as documento",
            "cli.responsavel as cliente",
            "cli.razao_social as empresa"
        )
            ->from("documentos_cliente as dcl")
            ->leftJoin("meses as mes", "dcl.id_mes", "=", "mes.id")
            ->join("clientes as cli", "dcl.id_cliente", "=", "cli.id")
            ->join("documentos as doc", "dcl.id_documento", "=", "doc.id")
            ->join("tipos_documentos as tpd", "doc.id_tipo_documento", "=", "tpd.id")
            ->when($cliente, function ($query) use ($params)  {
                return $query->where('dcl.id_cliente', $params['id_cliente']);
            })
            ->when($tipoDocumento, function ($query) use ($params)  {
                return $query->where('doc.id_tipo_documento', $params['id_tipo_documento']);
            })
            ->when($documento, function ($query) use ($params)  {
                return $query->where('dcl.id_documento', $params['id_documento']);
            })
            ->when($mes, function ($query) use ($params)  {
                return $query->where('dcl.id_mes', $params['id_mes']);
            })
            ->when($ano, function ($query) use ($params) {
                return $query->where('dcl.ano', $params['ano']);
            })
            ->get()
            ->toArray();
    }

    public function getById($id)
    {
        return self::select(
            "dcl.*",
            "tdo.id as id_tipo_documento"
        )
            ->from("documentos_cliente as dcl")
            ->join("documentos as doc", "dcl.id_documento", "=", "doc.id")
            ->join("tipos_documentos as tdo", "doc.id_tipo_documento", "=", "tdo.id")
            ->where("dcl.id", $id)
            ->get()
            ->toArray();
    }

    public function getByTipo($id, $user)
    {
        return self::select(
            "dcl.*",
            "mes.nome as mes",
            "doc.nome as documento",
            "cli.responsavel as cliente"
        )
            ->from("documentos_cliente as dcl")
            ->leftJoin("meses as mes", "dcl.id_mes", "=", "mes.id")
            ->join("clientes as cli", "dcl.id_cliente", "=", "cli.id")
            ->join("documentos as doc", "dcl.id_documento", "=", "doc.id")
            ->join("users as usr", "cli.id", "=", "usr.id_cliente")
            ->join("tipos_documentos as tdo", "doc.id_tipo_documento", "=", "tdo.id")
            ->where('usr.id', $user)
            ->where('doc.id_tipo_documento', $id)
            ->get()
            ->toArray();
    }

    public function salvar($data)
    {
        return self::create($data);
    }

    public function atualizar($data, $id)
    {
        return self::where('id', $id)
            ->update($data);
    }
}