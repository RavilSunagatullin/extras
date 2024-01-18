<?php

namespace App\Kernel\controller;

use App\Kernel\view\View;

abstract class Controller
{
    private View $view;

    public function view($name):void
    {
        $this->view->page($name);
    }

    public function setView(View $view): void
    {
        $this->view = $view;
    }
}