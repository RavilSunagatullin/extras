<?php

namespace App\Http\Controllers;
use App\Http\Requests\Product\StoreRequest;
use App\Http\Requests\Product\UpdateRequest;
use App\Models\Product;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;

class ProductContrller extends Controller
{
    public function index(Request $request){
        $sortColumn = $request->input('sort', 'id');
        $products = Product::orderBy($sortColumn)->paginate(3);
        return view("admin.products.index",compact("products"));
    }
    public function create(){
        return view("admin.products.create");
    }
    public function store(StoreRequest $request){
        $data = $request->validated();
        $data['image'] = Storage::disk('public')->put('/images', $data['image']);
        Product::firstOrCreate($data);
        return redirect()->route('admin.product.index');
    }
    public function edit(Product $product){
        return view('admin.products.edit',compact('product'));
    }
    public function update(UpdateRequest $request, Product $product){
        $data = $request->validated();
        if(isset($data['image'])){
            $data['image'] = Storage::disk('public')->put('/images', $data['image']);
        }
        $product->update($data);
        return redirect()->route('admin.product.index');
    }
    public function delete(Product $product){
        if(isset($product->image)){
            Storage::disk('public')->delete($product->image);
        }
        $product->delete();
        return redirect()->route('admin.product.index');
    }
}
