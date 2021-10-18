<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class StatusCliente extends Model
{
    protected $table = "status_cliente";
    protected $primaryKey = "id";
    public $incrementing = true;

    public $fillable = [
        "nome",
    ];

}