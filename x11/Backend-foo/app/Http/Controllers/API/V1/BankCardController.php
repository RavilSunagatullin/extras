<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\API\V1\BankCardStoreRequest;
use App\Models\BankCard;
use Illuminate\Http\Request;

class BankCardController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        return $user->bankCards()->get();
    }

    public function store(BankCardStoreRequest $request)
    {
        $user = auth()->user();
        $bankCard = new BankCard($request->all());
        $user->bankCards()->save($bankCard);
        return response()->json($bankCard, 201);
    }

    public function show(BankCard $bankCard)
    {
        $user = auth()->user();
        if ($user->id !== $bankCard->user_id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }
        return $bankCard;
    }

    public function update(Request $request, BankCard $bankCard)
    {
        $user = auth()->user();
        if ($user->id !== $bankCard->user_id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }
        $bankCard->update($request->all());
        return $bankCard;
    }

    public function destroy(BankCard $bankCard)
    {
        $user = auth()->user();
        if ($user->id !== $bankCard->user_id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }
        $bankCard->delete();
        return response()->json(null, 204);
    }
}
