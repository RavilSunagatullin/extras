@extends('layout.app')
@section('content')
    <a href="{{route("admin.index")}}" class="border bg px-10">Admin panel</a>
                <h1>form продукта</h1>
                <form action="{{route('admin.product.store')}}" method="post">
                @csrf
                <div>  
                 Название: <input type="text" name="title" value="{{ old('title') }}">
                </div>
                <div>
                 Текст: <textarea name="text" style="max-height:300px">{{old("text")}}</textarea>
                </div>
                <div>  
                 Цена: <input type="text" name="price" value="{{ old('price') }}">
                </div>
                <div>  
                 Кол-во: <input type="text" name="qty" value="{{ old('qty') }}">
                </div>
                 <div>
                    <input type="submit" value="отправить">
                </div>
                </form>
            </div>

@endsection
