@extends('layout.app')
@section('content')
    <div class="row">
        <a href="{{route("admin.index")}}" class="border bg px-10">Admin panel</a>
        <a href="{{route("admin.product.create")}}" class="border bg px-10">Создать продукт</a>
    </div>
    <table>
        <thead>
            <tr>
                <td>Название</td>
                <td>Текст</td>
                <td>Цена</td>
                <td>Кол-во</td>
                <td></td>
            </tr>
        </thead>
        <tbody>
            @foreach ($products as $product )
                <tr>
                <td>{{$product->title}}</td>
                <td>{{$product->text}}</td>
                <td>{{$product->price}}</td>
                <td>{{$product->qty}}</td>
                <td class="column">
                    <a href="{{route("admin.product.edit", $product->id)}}" class="border bg px-10">Edit</a>
                    {{-- <a href="{{route("admin.product.delete", $product->id)}}" class="border bg px-10">Delete</a> --}}
                    <form action="{{route("admin.product.delete", $product->id)}}" method="post" style="border:none; padding:0px">
                    @csrf
                    @method("delete")
                    <button type="submit" class="border bg px-10">Удалить</button>
                    </form>
                </td>
            </tr>
            @endforeach
            
        </tbody>
            </table>
@endsection