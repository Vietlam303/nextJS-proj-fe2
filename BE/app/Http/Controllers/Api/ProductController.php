<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Sale;
use App\Models\Author;
use App\Models\Category;
use App\Models\Review;
use App\Models\ProductCategory;
use App\Models\User;
use App\Models\Wishlist;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::paginate(4);
        return response()->json($products);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $sales = Sale::all();
        $authors = Author::all();
        $categories = Category::all();
        return response()->json([
            'sales' => $sales,
            'authors' => $authors,
            'categories' => $categories,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validation
        $validatedData = Validator::make($request->all(), [
            // Add your validation rules here
        ]);

        if ($validatedData->fails()) {
            return response()->json(['errors' => $validatedData->errors()], 422);
        }

        // Add your logic to store the product here

        return response()->json(['message' => 'Product created successfully'], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = Product::findOrFail($id);

        // Add your logic to fetch and return the product here

        return response()->json($product);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $product = Product::findOrFail($id);
        $sales = Sale::all();
        $authors = Author::all();
        $categories = Category::all();
        $productCategories = $product->categories->pluck('id');

        return response()->json([
            'product' => $product,
            'sales' => $sales,
            'authors' => $authors,
            'categories' => $categories,
            'productCategories' => $productCategories,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // Validation
        $validatedData = Validator::make($request->all(), [
            // Add your validation rules here
        ]);

        if ($validatedData->fails()) {
            return response()->json(['errors' => $validatedData->errors()], 422);
        }

        $product = Product::findOrFail($id);

        // Add your logic to update the product here

        return response()->json(['message' => 'Product updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $product = Product::findOrFail($id);

        // Add your logic to delete the product here

        return response()->json(['message' => 'Product deleted successfully']);
    }
}