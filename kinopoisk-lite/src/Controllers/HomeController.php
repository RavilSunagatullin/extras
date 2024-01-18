<?php

namespace App\Controllers;

use App\Kernel\controller\Controller;

class HomeController extends Controller
{
    public function index():void{
        $this->view('home');
    }
}