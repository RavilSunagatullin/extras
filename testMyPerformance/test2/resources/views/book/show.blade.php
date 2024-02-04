<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __($book->title) }}
        </h2>
    </x-slot>
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8" style="margin-top: 20px">
        @if($book->users[0]->id == Auth::id() || Auth::user()->isAdmin())
        <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg" style="max-width: 300px;">
            <div class="p-6 text-gray-900 dark:text-gray-100">
                @if($book->users[0]->id == Auth::id())
                    <x-dropdown-link :href="route('book.edit', $book->id)" style="border-radius: 8px">
                        {{ __('Edit book') }}
                    </x-dropdown-link>
                @endif
                <x-dropdown-link style="border-radius: 8px">
                    <form action="{{route('book.delete', $book->id)}}" method="post">
                        @csrf
                        @method('delete')
                        <button type="submit">Delete</button>
                    </form>
                </x-dropdown-link>
            </div>
        </div>
        @endif
    </div>
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8" style="margin-top: 20px">
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
</x-app-layout>
