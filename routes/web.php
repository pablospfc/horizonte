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

Route::get('clientes/listar',"ClientesController@index");
Route::get('clientes/listarAprovados',"ClientesController@listarAprovados");
Route::put('clientes/avaliar/{id}',"ClientesController@avaliar");
Route::post('documentoscliente/cadastrar',"DocumentosClienteController@store");
Route::post('documentoscliente/atualizar',"DocumentosClienteController@update");
Route::get('documentoscliente/listar',"DocumentosClienteController@index");
Route::get('documentoscliente/excluir/{id}',"DocumentosClienteController@destroy");
Route::get('documentoscliente/download/{file}',"DocumentosClienteController@downloadFile");

Route::get('tiposdocumentos/listar',"TiposDocumentosController@index");
Route::get('meses/listar',"MesesController@index");
