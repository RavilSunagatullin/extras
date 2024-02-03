<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CatalogController;
use App\Http\Controllers\ProfileController;
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


Route::get('/', [CatalogController::class, 'index'])->name('home');
Route::middleware(['auth'])->group(function (){
    Route::get('/create-book', [CatalogController::class, 'create'])->name('create.book');
    Route::post('/', [CatalogController::class, 'store'])->name('store.book');
    Route::get('/{book}',[CatalogController::class, 'show'])->name('show.book');
});
Route::middleware(['auth', 'admin'])->prefix('admin')->group(function (){
    Route::get('/', [AdminController::class, 'index'])->name('admin');
});

//Route::get('/dashboard', function () {
//    return view('dashboard');
//})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
