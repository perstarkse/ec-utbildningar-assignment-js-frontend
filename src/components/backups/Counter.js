import { useState, createContext, useContext, } from 'react'

const CounterContext = createContext();

export const useCounter = () => {
    return useContext(CounterContext)
}

export const Counter = () => {

    const [value, setValue] = useState(1);

    const increment = () => {
        setValue(current => current + 1);
    }
    const decrement = () => {
        if (value === 0) { }
        else {
            setValue(current => current - 1);
        }
    }
    return CounterContext({ value, increment, decrement })
}


    // return (
    //     <div className='container d-flex align-items-center justify-content-center vh-100 text-center'>
    //         <div>
    //             <p className='display-4'>
    //                 count:
    //                 <span className='ms-5' data-testid="count" >{value}</span>
    //             </p>
    //             <div className='mt-5'>
    //                 <button onClick={increment} className='btn btn-lg btn-secondary me-4'>Increment</button>
    //                 <button onClick={decrement} className='btn btn-lg btn-secondary ms-4'>Decrement</button>
    //             </div>
    //         </div>
    //     </div>
    // )