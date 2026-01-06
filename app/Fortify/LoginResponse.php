<?php

namespace App\Fortify;

use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;
use Laravel\Fortify\Fortify;

class LoginResponse implements LoginResponseContract
{
    /**
     * Create an HTTP response that represents the object.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function toResponse($request)
    {
        $user = auth()->user();

        // Check if user is admin and redirect to admin dashboard
        if ($user && $user->isAdmin()) {
            return redirect('/admin/dashboard');
        }

        // Default redirect for regular users
        return redirect()->intended(Fortify::redirects('login'));
    }
}
