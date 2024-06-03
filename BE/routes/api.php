<?php

use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('api')->group(function () {
    //PRODUCT
    Route::get('products', [ProductController::class, 'showshop']);
    Route::get('products/create', [ProductController::class, 'create']);
    Route::post('products', [ProductController::class, 'showshop']);
    Route::get('products/{id}', [ProductController::class, 'show']);
    Route::get('products/{id}/edit', [ProductController::class, 'edit']);
    Route::put('products/{id}', [ProductController::class, 'update']);
    Route::delete('products/{id}', [ProductController::class, 'destroy']);
    //CATEGORY
    Route::get('categories', [CategoryController::class, 'index']);
    
});