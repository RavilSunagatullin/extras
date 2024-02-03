<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class book_users extends Model
{
    use HasFactory;
    protected $table = 'book_users';
    protected $guarded = false;
}
