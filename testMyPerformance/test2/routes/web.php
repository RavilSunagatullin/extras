<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('welcome');
})->name('welcome');

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [BookController::class, 'index'])->name('book.index');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'admin'])->prefix('admin')->group(function () {
    Route::get('/', [AdminController::class, 'index'])->name('admin.index');
});
require __DIR__ . '/auth.php';

Route::middleware('auth')->group(function (){
    Route::get('/create-book', [BookController::class, 'create'])->name('book.create');
    Route::post('/store-book', [BookController::class, 'store'])->name('book.store');
    Route::get('/{book}', [BookController::class, 'show'])->name('book.show');
    Route::get('/{book}/edit', [BookController::class, 'edit'])->name('book.edit');
    Route::patch('/{book}', [BookController::class, 'update'])->name('book.update');
    Route::delete('/{book}', [BookController::class, 'delete'])->name('book.delete');
});




