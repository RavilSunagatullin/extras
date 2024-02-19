@extends('layout.app')
@section('content')
    <h1>Products</h1>
    <a href="{{route('admin.products.edit', $product->id)}}" style="text-decoration: underline;">Edit</a>
    <form action="{{route('admin.products.delete', $product->id)}}" method="post">
        @csrf
        @method('delete')
        <button type="submit">delete</button>
    </form>
    <table style="border: 1px solid #333; border-collapse: collapse; width: 100%">
        <thead>
        <tr>
            <td>title</td>
            <td>text</td>
            <td>price</td>
            <td>qty</td>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{$product->title}}</td>
                <td>{{$product->text}}</td>
                <td>{{$product->price}}</td>
                <td>{{$product->qt}}y</td>
            </tr>
        </tbody>
    </table>
@endsection
