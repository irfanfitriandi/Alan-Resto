<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

//import models food
use App\Models\Food;

class FoodController extends Controller
{
    //get all data
    public function all()
    {
        return Food::all();
    }

    //get data by id
    public function show($id)
    {
        return Food::find($id);
    }

    //add data
    public function store(Request $request)
    {
        return Food::create($request->all());
    }

    //update data
    public function update(Request $request, $id)
    {
        $food = Food::find($id);
        $food->update($request->all());
        return $food;
    }
    
    //delete data
    public function delete($id)
    {
        $food = Food::find($id);
        $food->delete();
        return 'Delete item success';
    }
}
