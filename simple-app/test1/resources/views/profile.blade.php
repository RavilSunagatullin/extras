@extends('layout.app')
@section('content')
<h1 class="border px-10 fz-32">Welcome {{$user->name}}</h1>
<form method="POST" action="{{ route('logout') }}" style="border:none; background:none">
    @csrf
    <a :href="route('logout')"
            onclick="event.preventDefault();
                        this.closest('form').submit();">
       <button class="bg px-10"> Log Out</button>
    </a>
</form>

<div class="column" style="width:100%">
<h2>Пhодукты</h2>

    
    @foreach ($products as $product)
        <div class="card column">
                <h1>{{$product->title}}</h1>
                <p
                    >{{$product->text}}</p
                >
                <a href="{{route('eshop.product.show', $product->id)}}" class="border px-10">Купить за {{$product->price}}</a>
            </div>
    @endforeach
</div>
@endsection