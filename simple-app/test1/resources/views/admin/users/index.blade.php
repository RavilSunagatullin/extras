@extends('layout.app')
@section('content')
    <a href="{{route("admin.index")}}" class="border bg px-10">Admin panel</a>
    <table>
        <thead>
            <tr>
                <td>Имя</td>
                <td>Почта</td>
                <td>Дата регистрации</td>
            </tr>
        </thead>
        <tbody>
            @foreach ($users as $user )
                <tr>
                <td>{{$user->name}}</td>
                <td>{{$user->email}}</td>
                <td>{{$user->created_at}}</td>
            </tr>
            @endforeach
            
        </tbody>
            </table>
@endsection