<?php

namespace App\Http\Controllers;

use App\Models\UserModel;
use Illuminate\Http\Request;
use App\Http\Requests\Post\CreateUserRequest;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateUserRequest $request)
    {
        // $validated = $request->validate([
        //     'Name'=>'required|string|max:80',
        //     'Dni'=>'required|string|max:9',
        //     'Email'=>'required|string|max:200',
        //     'Password'=>'required|string|max:40'
        // ]);                                          ESTO ESTÁ EN EL REQUEST/POST PORQUE SEPARAMOS LA LÓGICA DE LAS VALIDACIONES DEL ALMACENAMIENTO

        UserModel::create([
            'name'=> $request->input('name'),
            'dni'=> $request->input('dni'),
            'email'=> $request->input('email'),
            'password'=> bcrypt($request->input('password')),  //El bcrypt es para cifrar la contraseña antes de guardarla en la base de datos

        ]);

        return redirect()->route('users.index')->with('message', 'Usuario creado correctamente');
    }

    /**
     * Display the specified resource.
     */
    public function show(UserModel $userModel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(UserModel $userModel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, UserModel $userModel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserModel $userModel)
    {
        //
    }
}
