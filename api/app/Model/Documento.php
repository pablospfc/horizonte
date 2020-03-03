<?php


namespace App\Model;


use Illuminate\Database\Eloquent\Model;

class Documento extends Model
{
    protected $table = "documentos";
    protected $primaryKey = "id";
    public $incrementing = true;
    public $timestamps = false;

    protected  $fillable = [
      'id_tipo_documento',
      'nome'
    ];
}