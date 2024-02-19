@extends('layout.app')
@section('content')
    <form action="{{route('register.post')}}" method="post" style="display: flex; flex-direction: column; gap: 20px; border: 1px solid #333; padding: 30px; background-color: #fafafa">
        @csrf
        <h1>Register</h1>
        <div>
            <label for="name">Имя</label>
            <input type="text" name="name" id="name">
        </div>
        <div>
            <label for="email">Почта</label>
            <input type="email" name="email" id="email">
        </div>
        <div>
            <label for="password">Пароль</label>
            <input type="password" name="password" id="password">
        </div>
        <button type="submit">Зарегистрироваться</button>
    </form>
@endsection
