@extends('layout.app')
@section('content')
    <h1>Products</h1>
    <a href="{{route('admin.products.create')}}" style="text-decoration: underline;">create product</a>
    <table style="border: 1px solid #333; border-collapse: collapse; width: 100%">
        <thead>
        <tr>
            <td>title <a href="{{ route('admin.products', ['sort' => 'title']) }}">сорт</a></td>
            <td>text <a href="{{ route('admin.products', ['sort' => 'text']) }}">сорт</a></td>
            <td>price <a href="{{ route('admin.products', ['sort' => 'price']) }}">сорт</a></td>
            <td>qty <a href="{{ route('admin.products', ['sort' => 'qty']) }}">сорт</a></td>
            <td>actions</td>
        </tr>
        </thead>
        <tbody>
        @foreach($products as $product)
            <tr>
                <td>{{$product->title}}</td>
                <td>{{$product->text}}</td>
                <td>{{$product->price}}</td>
                <td>{{$product->qty}}</td>
                <td>
                    <a href="{{route('admin.products.show', $product->id)}}" style="text-decoration: underline">show more</a>
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
    {{$products->links()}}
@endsection
