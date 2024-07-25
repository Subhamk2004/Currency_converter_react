import React, { useState } from 'react';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
    let [from, setFrom] = useState('usd');
    let [to, setTo] = useState('inr');
    let [convertedAmount, setConvertedAmount] = useState(0);
    let [amount, setAmount] = useState(0);
    let isReadOnly = true;

    let optionsObj = useCurrencyInfo(from);
    let optionsArr = Object.keys(optionsObj);
    // Above is done to convert object into array so that we can apply .map function on it for currency options

    let currencyConverter = () => {
        setConvertedAmount(amount * optionsObj[to])
    }
    let swap = () => {
        setFrom(to);
        setTo(from);
    }
    return (
        <div className='flex flex-col items-center bg-blue-200 m-10 p-3 rounded-lg'>
            <div className='z-10 bg-blue-900 text-white p-3 m-6 rounded-xl'>
                <InputBox
                    readOnly={!isReadOnly}
                    label={"From"}
                    amount={amount}
                    selectCurrency={from}
                    currencyOptions={optionsArr}
                    onAmountChange={(amount) => setAmount(amount)}
                    onCurrencyChange={(from) => setFrom(from)}
                />
            </div>
            <button className='bg-blue-600 text-white p-2 rounded-lg -m-5'
            onClick={swap}>
                Swap Currencies
            </button>
            <div className='z-10 bg-blue-900 text-white p-3 m-6 rounded-xl'>
                <InputBox
                    readOnly={isReadOnly}
                    label={"To"}
                    amount={convertedAmount}
                    selectCurrency={to}
                    currencyOptions={optionsArr}
                    onCurrencyChange={(to) => setTo(to)}
                />
            </div>
            <button className='bg-green-600 p-1 rounded-lg w-80 text-white'
                onClick={currencyConverter}
            >
                Convert from {from} to {to}
            </button>
        </div>


    )
}

export default App