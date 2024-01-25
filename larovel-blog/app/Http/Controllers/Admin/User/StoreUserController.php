<?php

namespace App\Http\Controllers\Admin\User;

use App\Http\Requests\Admin\User\StoreRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class StoreUserController
{
    public function store(StoreRequest $request)
    {
        $data = $request->validated();
        $data['password']=Hash::make($data['password']);
        User::firstOrCreate(['email' => $data['email']],$data);
        return redirect()->route('admin.user.index');
    }
}
