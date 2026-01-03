<?php

use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

it('loads the homepage successfully', function () {
    $response = $this->get('/');

    $response->assertStatus(200);
});

it('contains the main headline', function () {
    $response = $this->get('/');

    $response->assertSee('Master O Level Bangla with a CAIE Examiner');
});

it('contains the subheadline', function () {
    $response = $this->get('/');

    $response->assertSee('Learn with Rofsan Sir and unlock the world with the Beauty of Bengali');
});

it('contains course section', function () {
    $response = $this->get('/');

    $response->assertSee('O Level Bangla Full Course');
});

it('contains books section', function () {
    $response = $this->get('/');

    $response->assertSee('Rofsan Khan\'s Published Guidebooks');
});

it('contains admissions banner', function () {
    $response = $this->get('/');

    $response->assertSee('Admission Going On');
});
