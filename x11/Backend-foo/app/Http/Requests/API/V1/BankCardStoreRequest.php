<?php

namespace App\Http\Requests\API\V1;

use Illuminate\Foundation\Http\FormRequest;

class BankCardStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'card_number' => 'required|string|unique:bank_cards|max:16',
            'card_holder_name' => 'required|string|max:3',
            'expiration_month' => 'required|integer|min:1|max:12',
            'expiration_year' => 'required|integer|min:' . date('Y') . '|max:' . (date('Y') + 10),
            'account_balance_rub' => 'required|numeric|min:0',
        ];
    }
}
