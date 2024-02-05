<?php

namespace App\Http\Controllers;

use App\Http\Requests\BookStoreRequest;
use App\Http\Requests\BookUpdateRequest;
use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Mockery\Exception;

class ApiBookController extends Controller
{
    public function index()
    {
        return Book::all();
    }

    public function store(BookStoreRequest $request)
    {
        $data = $request->validated();
//        $userId = ?
        $book = Book::firstOrCreate($data);
//        $book->users()->attach($userId);
        return $book;
    }

    public function show(Book $book)
    {
        try{
            return $book = Book::find($book);
        }
        catch (Exception $exception){
            return $exception;
        }
    }


    public function update(BookUpdateRequest $request, Book $book)
    {
        $data = $request->validated();
//        $userId = Auth::id();
        $book->update($data);
//        $book->users()->sync(Auth::user()->books);
        return response()->json($book);
    }

    public function destroy(Book $book)
    {
        // тут может быть как админ так и пользователь
//        $userId = $book->users[0]->id;
        try{
//            $book->users()->detach($userId);
            $book->delete();
        }
        catch (\Exception $exception){
            dd($exception);
        }
        return response(null, 204);
    }
}
