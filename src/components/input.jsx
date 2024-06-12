import React, {useId} from "react";


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectCurrency = 'usd',
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {

    let amountId = useId();
    // useId return a unique id everytime it gets called
    // as we know that props are nothing but objects which have some keys
    // and values, so instead of taking props as an argument, and then doing
    // props.label, props.amount etc,

    // we directly destructured the objects
    // and now we can directly access those keys, without using props.key



    // this function accepts an object as an argument, which has several
    // properties, and some of them has default values

    // instead of this confusing syntax we chould have also just passed a
    // props in the function and then access the properties of object as
    // props.label, props.amount, props.onAmountChange etc

    // refer to Basics_new mac_card.jsx and tailwind&PropsLearn.jsx files
    // for passing props
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex 
        ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange &&
                onAmountChange(Number(e.target.value))}

                    // the above onChange can also be written as :
                    //onChange={(e) => {
                    //   const newAmount = Number(e.target.value);
                    //   if (onAmountChange) {
                    //     onAmountChange(newAmount);
                    //   }
                    // }}
                    //above is a more readable way to write the same thing !!

                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange
                && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >

                    {/*if you want to use loops then consider using keys for
                     better performance*/}
                    {currencyOption.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}

                </select>
            </div>
        </div>
    );
}

export default InputBox;
