<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(): \Inertia\Response
    {
        return Inertia::render('home/index');
    }

    public function courses(): \Inertia\Response
    {
        return Inertia::render('courses/index');
    }

    public function resources(): \Inertia\Response
    {
        return Inertia::render('resources/index');
    }

    public function tips(): \Inertia\Response
    {
        return Inertia::render('tips/index');
    }
}
