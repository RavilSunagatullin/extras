@extends('layout.app')
@section('content')
    <h1>Admin panel</h1>
    <div class="row">
        <a href="{{route('admin.product.index')}}" class="border bg px-10">Товары</a>
        <a href="{{route('admin.user.index')}}" class="border bg px-10">Пользователи</a>
        <a href="{{route('admin.statistics.index')}}" class="border bg px-10">Статистика</a>
    </div>
@endsection