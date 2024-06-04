<?php

namespace Database\Seeders;

use App\Models\Review;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Review::factory()->create([
            'product_id' => '1',
            'user_id' => '1',   
            'review_content' => 'lorem' ,
             'image' => 'book.jpg',
        ]);
    }
}
