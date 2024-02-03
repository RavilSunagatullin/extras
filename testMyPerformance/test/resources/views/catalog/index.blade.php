<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Catalog') }}
        </h2>
    </x-slot>
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-3 " style="margin-top: 20px ">
        <x-primary-link href="{{route('create.book')}}">Create Book page</x-primary-link>
    </div>
    @foreach($books as $book)
        <a href="{{route('show.book', $book->id)}}">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-3 ">
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900 dark:text-gray-100">
                        <strong>Book</strong>
                        Title: {{$book->name}}<br>
                        Content: {{$book->content}}<br>
                    </div>
                </div>
            </div>
        </a>
    @endforeach

</x-app-layout>
