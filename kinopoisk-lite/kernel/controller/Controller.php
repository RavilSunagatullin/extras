<?php

namespace App\Kernel\controller;

use App\Kernel\Http\Request;
use App\Kernel\view\View;

abstract class Controller
{
    private View $view;

    private Request $request;

    public function request():Request{
        return $this->request;
    }
    public function setRequest(Request $request):void{
        $this->request = $request;
    }
    public function view($name):void
    {
        $this->view->page($name);
    }

    public function setView(View $view): void
    {
        $this->view = $view;
    }
}