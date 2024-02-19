@extends('layout.app')
@section('content')
    <form action="{{route('admin.products.store')}}" method="post" style="display: flex; flex-direction: column; gap: 20px; border: 1px solid #333; padding: 30px; background-color: #fafafa">
        @csrf
        <h1>Create</h1>
        <div>
            <label for="title">Title</label>
            <input type="text" name="title" id="title" value="{{old('title')}}">
        </div>
        <div>
            <label for="price">Price</label>
            <input type="text" name="price" id="price" value="{{old('price')}}">
        </div>
        <div>
            <label for="qty">Кол-во</label>
            <input type="text" name="qty" id="qty" value="{{old('qty')}}">
        </div>
        <div>
            <label for="text">Text</label>
            <textarea name="text" id="text" style="max-height: 300px">
                {{old('text')}}
            </textarea>
        </div>
        <button type="submit">Создать</button>
    </form>
@endsection
