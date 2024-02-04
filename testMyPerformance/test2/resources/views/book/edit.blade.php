<x-guest-layout>
    <!-- Session Status -->
    <x-auth-session-status class="mb-4" :status="session('status')" />

    <form method="POST" action="{{ route('book.update', $book->id) }}">
        @csrf
        @method('patch')
        <!-- Email Address -->
        <div>
            <x-input-label for="title" :value="__('Title')" />
            <x-text-input id="title" class="block mt-1 w-full" type="text" name="title" :value="$book->title" />
            <x-input-error :messages="$errors->get('title')" class="mt-2" />
        </div>
        <div style="margin-top:10px">
            <label for="description">description</label>
            <textarea id="description" name="description" style="border-radius: 8px; width: 100%;">{{$book->description}}</textarea>
        </div>
        <div class="flex items-center justify-end mt-4">
            <x-primary-button class="ms-3">
                {{ __('Edit') }}
            </x-primary-button>
        </div>
    </form>
</x-guest-layout>
