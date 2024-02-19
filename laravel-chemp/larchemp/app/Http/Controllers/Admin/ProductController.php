<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request){
        $sort = $request->input('sort', 'id');
        $products = Product::orderBy($sort)->paginate(5);
        return view('admin.products.index', compact('products'));
    }
    public function create(){
        return view('admin.products.create');
    }
    public function store(Request $request){
        $data = $request->validate([
            'title'=>['required'],
            'text'=>['required'],
            'price'=>['required'],
            'qty'=>['required'],
        ]);
        Product::firstOrCreate($data);
        return redirect()->route('admin.products');
    }
    public function show(Product $product){
        return view('admin.products.show', compact('product'));
    }
    public  function edit(Product $product){
        return view('admin.products.edit', compact('product'));
    }
    public function update(Request $request, Product $product){
        $data = $request->validate([
            'title'=>['required'],
            'text'=>['required'],
            'price'=>['required'],
            'qty'=>['required'],
        ]);
        $product->update($data);
        return redirect()->route('admin.products.show', $product->id);
    }
    public function delete(Product $product){
        $product->delete();
        return redirect()->route('admin.products');
    }
}
