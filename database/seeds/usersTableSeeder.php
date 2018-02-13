<?php

use Illuminate\Database\Seeder;

class usersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $user = \App\User();
        $user->name = "admin";
        $user->email = "admin@admin.com";
        $user->password = md5("password");
    }
}