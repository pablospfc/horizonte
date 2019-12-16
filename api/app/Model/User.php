<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    //use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    /*
    protected $table = "users";
    protected $primaryKey = "id";
    public $incrementing = true;
    public $timestamps = true;
*/
    protected $fillable = [
        'id_perfil',
        'id_cliente',
        'name',
        "login",
        "password"
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

}
