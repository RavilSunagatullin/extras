@extends('layout.app')
@section('content')

            <a href="/" class="px-10 border bg">
                    На главную
                </a>
                <h1>form register</h1>
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