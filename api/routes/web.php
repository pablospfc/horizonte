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
    Route::get('clientes/listar', "ClientesController@index");
    Route::get('clientes/listarAprovados', "ClientesController@listarAprovados");
    Route::put('clientes/avaliar/{id}', "ClientesController@avaliar");
    Route::post('documentoscliente/cadastrar', "DocumentosClienteController@store");
    Route::post('documentoscliente/atualizar/{id}', "DocumentosClienteController@update");
    Route::get('documentoscliente/listar', "DocumentosClienteController@index");
    Route::get('documentoscliente/getById/{id}', "DocumentosClienteController@show");
    Route::get('documentoscliente/getByTipo/{id}/{user}', "DocumentosClienteController@getByTipo");
    Route::delete('documentoscliente/excluir/{id}', "DocumentosClienteController@destroy");
    Route::get('documentoscliente/download/{file}', "DocumentosClienteController@downloadFile");

    Route::get('tiposdocumentos/listar', "TiposDocumentosController@index");
    Route::get('meses/listar', "MesesController@index");
});