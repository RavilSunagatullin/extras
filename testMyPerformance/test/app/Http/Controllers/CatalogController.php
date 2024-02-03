<?php

namespace App\Http\Controllers;

use App\Http\Requests\Catalog\StoreRequest;
use App\Models\book_users;
use App\Models\books;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class CatalogController extends Controller
{
    public function index(){
        $books = books::all();
        return view('catalog.index', compact('books'));
    }
    public function create(){
        return view('catalog.create');
    }
    public function store(StoreRequest $request){
        $data = $request->validated();
        $book = books::firstOrCreate($data);
        $book_user_data = [
            'user_id'=>Auth::id(),
            'book_id'=>$book->id,
        ];
        book_users::firstOrCreate($book_user_data);
        return redirect()->route('home');
    }
    public function show(books $book){
        $book_user= book_users::where('book_id', $book->id)->get();
        $userId = $book_user[0]->user_id;
        $user = User::where('id',$userId)->get();
        $user = $user[0];
        return view('catalog.show', compact('user', 'book'));
    }
}
