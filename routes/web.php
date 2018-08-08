<?php
use Illuminate\Support\Facades\Route;

Route::get('/', 'HomeController@index');

Auth::routes();
