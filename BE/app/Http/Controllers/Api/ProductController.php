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
use Illuminate\Pagination\Paginator;

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
    public function showshop(Request $request)
    {
        $price1 = 0;
        $price2 = 0;
        $queryprice = "";
        $querysort = "";
        $productReSearch = [];

        $toprice = $request->input('toPrice');
        $tosort = $request->input('toSort');
        $tocattegory = $request->input('toCategory');

        // Xác định giá trị của biến trung gian từ 'toPrice' và 'toSort'
        switch ($toprice) {
            case 1:
                $price1 = 50000;
                $price2 = 80000;
                $queryprice = [$price1, $price2];
                break;
            case 2:
                $price1 = 80000;
                $price2 = 150000;
                $queryprice = [$price1, $price2];
                break;
            case 3:
                $price1 = 150000;
                $queryprice = ['>=', $price1];
                break;
        }

        // Xác định giá trị của biến trung gian từ 'toSort'
        switch ($tosort) {
            case 1:
                $querysort = 'asc';
                break;
            case 2:
                $querysort = 'desc';
                break;
        }

       if ($toprice != 0 && $tosort != 0 && $tocattegory != 0) {
            // Truy vấn dữ liệu từ cơ sở dữ liệu
            $products = Product::whereBetween('price', $queryprice)
                ->orderBy('price', $querysort);
                
                
            $productCategories = ProductCategory::where('category_id', $tocattegory)->get();
            foreach ($products as $product) {
                foreach ($productCategories as $productcate) {
                    if ($productcate->product_id == $product->id) {
                        array_push($productReSearch, $product);
                    }
                }
            }
             $productshop = new Paginator($productReSearch,2);
                
       }
       else{
        $products = Product::paginate(2);
            $productshop = $products;
       }
        return response()->json($productshop);
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