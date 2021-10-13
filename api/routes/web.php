<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('app');
});
Route::group(['middleware' => 'cors'], function() {
    Route::post('auth/login', 'AuthController@login');
    Route::post('auth/refresh', 'AuthController@refresh');
    Route::put('auth/atualizar', 'AuthController@update');
    Route::get('auth/logout', 'AuthController@logout');

    Route::post('clientes/cadastrar', "ClientesController@store");
    Route::put('clientes/atualizar/{id}', "ClientesController@update");
    Route::get('clientes/listar', "ClientesController@index");
    Route::get('clientes/listarAprovados', "ClientesController@listarAprovados");
    Route::get('clientes/getById/{id}', "ClientesController@show");
    Route::put('clientes/avaliar/{id}', "ClientesController@avaliar");
    Route::get('usuarios/listar', "UsuariosController@index");
    Route::get('usuarios/getById/{id}', "UsuariosController@show");
    Route::put('usuarios/atualizar/{id}', "UsuariosController@update");
    Route::post('usuarios/createPassword', "UsuariosController@createPassword");
    Route::post('documentoscliente/cadastrar', "DocumentosClienteController@store");
    Route::post('mensagem/enviar', "MensagemController@enviar");
    Route::post('documentoscliente/atualizar/{id}', "DocumentosClienteController@update");
    Route::post('documentoscliente/listar/{setor}', "DocumentosClienteController@index");
    Route::get('documentoscliente/getById/{id}', "DocumentosClienteController@show");
    Route::get('documentos/getByTipo/{id}', "DocumentosController@getByTipo");
    Route::get('documentoscliente/getByTipo/{id}/{user}', "DocumentosClienteController@getByTipo");
    Route::delete('documentoscliente/excluir/{id}', "DocumentosClienteController@destroy");
    Route::get('documentoscliente/download/{file}', "DocumentosClienteController@downloadFile");
    Route::get('tiposdocumentos/listar', "TiposDocumentosController@index");
    Route::get('tiposdocumentos/getByUserSetor/{setor}', "TiposDocumentosController@getByUserSetor");
    Route::get('meses/listar', "MesesController@index");
});
