<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use mysql_xdevapi\Exception;

class AuthController extends Controller
{
    public function login()
    {
        return view('auth.login');
    }

    public function login_post(Request $request)
    {
        $data = $request->validate([
            'email' => ['required'],
            'password' => ['required'],
        ]);
        if(Auth::attempt($data)){
            $request->session()->regenerate();
            return redirect()->route('welcome');
        }
        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    public function register()
    {
        return view('auth.register');
    }

    public function register_post(Request $request)
    {
        $data = $request->validate([
            'name' => ['required'],
            'password' => ['required'],
            'email' => ['required', 'email']
        ]);
        $user = User::create($data);
        event(new Registered($user));
        Auth::login($user);
        return redirect()->route('welcome');
    }
    public function logout(){
        Auth::logout();
        return redirect()->route('welcome');
    }
}
