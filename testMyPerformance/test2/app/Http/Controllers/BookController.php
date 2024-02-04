<?php

namespace App\Http\Controllers;

use App\Http\Requests\BookStoreRequest;
use App\Http\Requests\BookUpdateRequest;
use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::all();
        return view('dashboard', compact('books'));
    }

    public function create()
    {
        return view('book.create');
    }

    public function store(BookStoreRequest $request)
    {
        $data = $request->validated();
        $userId = Auth::id();
        $book = Book::firstOrCreate($data);
        $book->users()->attach($userId);
        return redirect()->route('book.index');
    }

    public function show(Book $book)
    {
        return view('book.show', compact('book'));
    }

    public function edit(Book $book)
    {
        if ($book->users[0]->id !== Auth::id()) {
            return redirect()->route('book.index');
        }
        return view('book.edit', compact('book'));
    }

    public function update(BookUpdateRequest $request, Book $book)
    {
        if ($book->users[0]->id !== Auth::id()) {
            return redirect()->route('book.index');
        }
        $data = $request->validated();
        $userId = Auth::id();
        $book->update($data);
        $book->users()->sync(Auth::user()->books);
        return redirect()->route('book.show', $book->id);
    }

    public function delete(Book $book)
    {
        if ($book->users[0]->id !== Auth::id()&& !Auth::user()->isAdmin( )) {
            return redirect()->route('book.index');
        }
        // тут может быть как админ так и пользователь
        $userId = $book->users[0]->id;
        try{
            $book->users()->detach($userId);
            $book->delete();
        }
        catch (\Exception $exception){
            dd($exception);
        }
        return redirect()->route('book.index');
    }
}
