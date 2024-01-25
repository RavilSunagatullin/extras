<?php

namespace App\Http\Controllers\Admin\User;



use App\Models\Tag;

class CreateUserController
{
    public function create(){
        return view('admin.users.create');
    }
}
