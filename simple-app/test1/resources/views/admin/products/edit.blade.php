@extends('layout.app')
@section('content')
    <a href="{{route("admin.index")}}" class="border bg px-10">Admin panel</a>
                <h1>form продукта</h1>
                <form action="{{route('admin.product.update', $product->id)}}" method="post">
                @csrf
                @method('patch')
                <div>  
                 Название: <input type="text" name="title" value="{{ $product->title }}">
                </div>
                <div>
                 Текст: <textarea name="text" style="max-height:300px">{{$product->text}}</textarea>
                </div>
                <div>  
                 Цена: <input type="text" name="price" value="{{ $product->price }}">
                </div>
                <div>  
                 Кол-во: <input type="text" name="qty" value="{{ $product->qty }}">
                </div>
                 <div>
                    <input type="submit" value="отправить">
                </div>
                </form>
            </div>

@endsection
