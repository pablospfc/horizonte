<?php


namespace App\Model;


use Illuminate\Database\Eloquent\Model;

class Mes extends Model
{
    protected $table = "meses";
    protected $primaryKey = "id";
    public $incrementing = true;

    public $fillable = [
        "nome",
    ];

}