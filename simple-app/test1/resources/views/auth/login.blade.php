@extends('layout.app')
@section('content')

            <a href="/" class="px-10 border bg">
                    На главную
                </a>
                <h1>form login</h1>
                <form action="{{route('post.login')}}" method="post">
                @csrf
                <div>  
                 Email: <input type="email" name="email" value="{{ old('email') }}">
                </div>
                <div>
                 Пароль: <input type="password" name="password" value="{{old('password')}}">
                </div>
                 <div>
                    <input type="submit" value="отправить">
                </div>
                </form>
            </div>

@endsection


{{-- <!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>e-shop</title>
    </head>
    <body class="font-sans text-gray-900 antialiased">
        
    </body>
</html> --}}