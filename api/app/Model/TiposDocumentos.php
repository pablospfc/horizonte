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

}