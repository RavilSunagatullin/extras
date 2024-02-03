<x-guest-layout>
    <form method="post" action="{{ route('store.book') }}">
        @csrf
        <div>
            <x-input-label for="name" :value="__('Name')"/>
            <x-text-input id="name" class="block mt-1 w-full" type="text" name="name" :value="old('name')" required
                          autofocus autocomplete="username"/>
            <x-input-error :messages="$errors->get('name')" class="mt-2"/>
        </div>
       <div>
           <label for="content">Content</label>
           <textarea name="content" id="content" class="block mt-1 w-full" style="border-radius: 12px"></textarea>
       </div>
       <div style="margin-top: 8px;">
           <x-primary-button type="submit" >Submit</x-primary-button>
       </div>
    </form>
</x-guest-layout>
