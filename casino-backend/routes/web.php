<?php

use Illuminate\Support\Facades\Route;

// ¡AÑADE ESTO! Esta ruta forzará al servidor a devolver una respuesta JSON simple
Route::get('/', function () {
    return response()->json(['message' => 'API is working', 'status' => 'success']);
});

