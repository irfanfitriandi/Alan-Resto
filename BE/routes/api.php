<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//add route for food
Route::get('/food','App\Http\Controllers\FoodController@all');
Route::get('/food/{id}','App\Http\Controllers\FoodController@show');
Route::post('/food','App\Http\Controllers\FoodController@store');
Route::put('/food/{id}','App\Http\Controllers\FoodController@update');
Route::delete('/food/{id}','App\Http\Controllers\FoodController@delete');
