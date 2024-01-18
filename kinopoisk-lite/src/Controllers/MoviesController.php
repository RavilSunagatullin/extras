<?php

namespace App\Controllers;

use App\Kernel\controller\Controller;

class MoviesController extends Controller
{
    public function index():void{
        $this->view('movies');
    }
}