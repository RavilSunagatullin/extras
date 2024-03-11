<?php

use App\Http\Controllers\API\V1\BankCardController;
use App\Http\Controllers\API\V1\LoginController;
use App\Http\Controllers\API\V1\LogoutController;
use App\Http\Controllers\API\V1\RegisterController;
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


Route::prefix('auth')->group(function () {
    Route::post('/register', [RegisterController::class, 'register'])->name('register');
    Route::post('/login', [LoginController::class, 'login'])->name('login');
    Route::post('/logout', [LogoutController::class, 'logout'])->name('logout');
});

Route::prefix('bank-cards')->group(function () {
    Route::get('/', [BankCardController::class, 'index'])->name('index');
    Route::post('/store', [BankCardController::class, 'store'])->name('store');
    Route::get('/{bankCard}', [BankCardController::class, 'show'])->name('show');
    Route::put('/{bankCard}/update', [BankCardController::class, 'update'])->name('update');
    Route::delete('/{bankCard}/delete', [BankCardController::class, 'destroy'])->name('destroy');
});

