@extends('layout.app')
@section('content')
        <table>
        <thead>
            <tr>
                <td>Название</td>
                <td>Текст</td>
                <td>Цена</td>
                <td>Картинка</td>
                <td></td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{$product->title}}</td>
                <td>{{$product->text}}</td>
                <td>{{$product->price}}</td>
                <td><img src="{{asset('storage/'.$product->image)}}" alt="{{$product->title}} image"></td>
                <td><button>кнопка</button></td>
            </tr>
            
        </tbody>
            </table>
@endsection
