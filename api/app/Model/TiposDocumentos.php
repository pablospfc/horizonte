<?php


namespace App\Model;


use Illuminate\Database\Eloquent\Model;

class TiposDocumentos extends Model
{
    protected $table = "tipos_documentos";
    protected $primaryKey = "id";
    public $incrementing = true;

    public $fillable = [
        "nome",
    ];

    public function getByUserSetor($setor) {
            return self::select(
                "tdc.*"
            )
                ->from("tipos_documentos as tdc")
                ->join("setor_tipos_documentos as std", "std.id_tipo_documento", "=", "tdc.id")
                ->join("users as usr", "usr.id_setor", "=", "std.id_setor")
                ->where("std.id_setor",$setor )
                ->get()
                ->toArray();
    }

}
