<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg" style="max-width: 300px;">
                <div class="p-6 text-gray-900 dark:text-gray-100">
                    <x-dropdown-link :href="route('book.create')" style="border-radius: 8px">
                        {{ __('Create book') }}
                    </x-dropdown-link>
                </div>
            </div>
        </div>
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8" style="display: flex; justify-content: left; gap: 20px">
            @foreach($books as $book)
                <div class="max-w-7xl " style="margin-top: 20px" >
                    <a href="{{route('book.show', $book->id)}}">
                    <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"
                         style="max-width: 300px;">
                        <div class="p-6 text-gray-900 dark:text-gray-100">
                            <table>
                                <tr>
                                    <td>ID</td>
                                    <td>{{$book->id}}</td>
                                </tr>
                                <tr>
                                    <td>Title</td>
                                    <td>{{$book->title}}</td>
                                </tr>
                                <tr>
                                    <td>Description</td>
                                    <td>{{$book->description}}</td>
                                </tr>
                            </table>
                        </div>

                    </div>
                    </a>
                </div>
            @endforeach
        </div>
    </div>
</x-app-layout>
