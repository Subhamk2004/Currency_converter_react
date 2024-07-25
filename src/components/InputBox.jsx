import React from 'react'

function InputBox({
    currencyOptions,
    selectCurrency,
    readOnly,
    label,
    onAmountChange,
    amount,
    onCurrencyChange
}) {
    return (
        <div className='flex flex-row gap-2 min-w-20 max-w-lg'>
            <div className='flex flex-col w-1/2'>
                <label>{label}</label>
                <input
                    className='h-10 w-full rounded-lg text-black p-1'
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}I
                    type='number' 
                    readOnly = {readOnly}
                />
            </div>
            <div className='flex flex-col w-1/2'>
                <label>Selet Currency</label>
                <select className='text-center h-10 w-full rounded-lg text-black bg-white'
                value={selectCurrency}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default InputBox