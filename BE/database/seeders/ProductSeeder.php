<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Product::factory()->create([
            'name' => 'A Poem for Every night',
            'price' => '307000',
            'reduced_price' => '291650',
            'description' => 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur erit qui in ea voluptate',
            'image' => 'a-poem-for-every-night.jpg',
            'publishing_year' => '2013',
            'sale_id' => '3',
            'author_id' => '2',
        ]);
        Product::factory()->create([
            'name' => 'A Teaspoon of Earth and Sea',
            'price' => '307000',
            'reduced_price' => '231650',
            'description' => 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur erit qui in ea voluptate',
            'image' => 'a-teaspoon-of-earth-and-sea.jpg',
            'publishing_year' => '2013',
            'sale_id' => '3',
            'author_id' => '2',
        ]);
        Product::factory()->create([
            'name' => 'All this has nothing to do with Me',
            'price' => '307000',
            'reduced_price' => '231650',
            'description' => 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur erit qui in ea voluptate',
            'image' => 'all-this-has-nothing-to-do-with-me.jpg',
            'publishing_year' => '2013',
            'sale_id' => '3',
            'author_id' => '2',
        ]);
        Product::factory()->create([
            'name' => 'Bulle & Pelle',
            'price' => '307000',
            'reduced_price' => '231650',
            'description' => 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur erit qui in ea voluptate',
            'image' => 'bulle-&-pelle.jpg',
            'publishing_year' => '2013',
            'sale_id' => '3',
            'author_id' => '2',
        ]);
        Product::factory()->create([
            'name' => 'Bulle und Pelle',
            'price' => '307000',
            'reduced_price' => '231650',
            'description' => 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur erit qui in ea voluptate',
            'image' => 'bulle-und-pelle.jpg',
            'publishing_year' => '2013',
            'sale_id' => '3',
            'author_id' => '2',
        ]);
        Product::factory()->create([
            'name' => 'Creative Life',
            'price' => '307000',
            'reduced_price' => '231650',
            'description' => 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur erit qui in ea voluptate',
            'image' => 'creative-life.jpg',
            'publishing_year' => '2013',
            'sale_id' => '3',
            'author_id' => '2',
        ]);
    }
}