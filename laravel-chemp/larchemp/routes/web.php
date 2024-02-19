<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('welcome');
Route::prefix('auth')->group(function () {
    Route::get('/login', [\App\Http\Controllers\Auth\AuthController::class, 'login'])->name('login');
    Route::post('/login', [\App\Http\Controllers\Auth\AuthController::class, 'login_post'])->name('login.post');
    Route::get('/register', [\App\Http\Controllers\Auth\AuthController::class, 'register'])->name('register');
    Route::post('/register', [\App\Http\Controllers\Auth\AuthController::class, 'register_post'])->name('register.post');
    Route::get('/logout', [\App\Http\Controllers\Auth\AuthController::class, 'logout'])->name('logout');
});
Route::get('/home', [\App\Http\Controllers\Home\HomeController::class, 'index'])->name('home');
Route::prefix('admin')->middleware(['auth', 'admin'])->group(function (){
    Route::get('/', [\App\Http\Controllers\Admin\AdminController::class, 'index'])->name('admin');
    Route::prefix('/products')->group(function (){
        Route::get('/', [\App\Http\Controllers\Admin\ProductController::class, 'index'])->name('admin.products');
        Route::get('/create', [\App\Http\Controllers\Admin\ProductController::class, 'create'])->name('admin.products.create');
        Route::post('/store', [\App\Http\Controllers\Admin\ProductController::class, 'store'])->name('admin.products.store');
        Route::get('/{product}', [\App\Http\Controllers\Admin\ProductController::class, 'show'])->name('admin.products.show');
        Route::get('/{product}/edit', [\App\Http\Controllers\Admin\ProductController::class, 'edit'])->name('admin.products.edit');
        Route::patch('/{product}/update', [\App\Http\Controllers\Admin\ProductController::class, 'update'])->name('admin.products.update');
        Route::delete('/{product}/delete', [\App\Http\Controllers\Admin\ProductController::class, 'delete'])->name('admin.products.delete');
    });
});
