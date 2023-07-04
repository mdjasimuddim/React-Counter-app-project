import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    const incrementClick = () => {
        setCount(count+1);
    }
    const decrementClick = () => {
        setCount(count-1);
    }
    const resetClick = () => {
        setCount(0);
    }
  return (
    <div>
        <h1>Counter App</h1>
        <div className='counterDiv'>
            <h3>Count : {count} </h3>
            <button onClick={incrementClick} disabled = {count === 5 ? true : false}>+</button>
            <button onClick={decrementClick} disabled = {count === -5 ? true : false}>-</button>
            <button onClick={resetClick}>0</button>
        </div>
    </div>
  )
}
