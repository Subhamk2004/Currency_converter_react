// this is a custom hook, we will be using in our project
// a custom hook can be as simple as a function returning two values
// these custom hooks can also use default hooks

import {useEffect, useState} from "react";
function UseCurrencyInfo(currency) {
    let [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setData(res[currency])
            })

        // in the above we have used two then and, if we just, used one .then()
        // then it would have crated a problem of passing an empty object or
        // data to the setData, as it would not wait if the data is actually
        // loaded or not till then, and by using two .then() first we are
        // fetching the data, and then only we are passing it to the setData()


        // the above .then() chaining can also be done in a shorter way as:
        //     .then((res) => res.json())
        //     .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency]);
    console.log(data);
    return data;
}

export default UseCurrencyInfo;