<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserModel extends Model
{
    //Indicar cuál es la nueva clave primaria
    protected $primaryKey = 'Dni';

    //Indicar que no es un número autoincremental
    public $incrementing = false;

    //Indicar que el tipo de la clave es un string
    protected $keyType = 'string';

    protected $fillable = ['Dni', 'Name', 'Email', 'Password'];
}
