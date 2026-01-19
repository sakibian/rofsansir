<?php

namespace App\Http\Controllers;

use App\Models\Routine;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(): \Inertia\Response
    {
        $routines = Routine::active()
            ->orderBy('day_of_week')
            ->orderBy('start_time')
            ->take(10) // Limit for home page display
            ->get();

        return Inertia::render('home/index', [
            'routines' => $routines,
        ]);
    }

    public function courses(): \Inertia\Response
    {
        return Inertia::render('courses/index');
    }

    public function foundationCourse(): \Inertia\Response
    {
        return Inertia::render('courses/foundation');
    }

    public function class9Course(): \Inertia\Response
    {
        return Inertia::render('courses/class9');
    }

    public function class10Course(): \Inertia\Response
    {
        return Inertia::render('courses/class10');
    }

    public function resources(): \Inertia\Response
    {
        return Inertia::render('resources/index');
    }

    public function tips(): \Inertia\Response
    {
        return Inertia::render('tips/index');
    }

    public function about(): \Inertia\Response
    {
        return Inertia::render('about/index');
    }
}
