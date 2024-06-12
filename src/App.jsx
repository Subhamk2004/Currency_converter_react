import { useState } from 'react'
import './App.css'
import {InputBox} from './components'
import UseCurrencyInfo from "./custom_hooks/useCurrencyInfo.js";

function App() {
    let [amount, setAmount] = useState(0)
    let [from, setFrom] = useState('usd')
    let [to, setTo] = useState('inr')
    let [convertedAmt, setConvertedAmt] = useState(0)

    let currencyInfo = UseCurrencyInfo(from)

    let options = Object.keys(currencyInfo);

    let swap = () => {
        setFrom(to)
        setTo(from)
        setConvertedAmt(amount)
        setAmount(convertedAmt)
    }

let convert = () => {
    setConvertedAmt(amount * currencyInfo[to])
}
    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"

        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()

                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOption={options}
                                onCurrencyChange={(currency) => setAmount(amount)}
                                selectCurrency={from}
                                onAmountChange={(amount) =>
                            setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2
                                border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmt}
                                currencyOption={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
