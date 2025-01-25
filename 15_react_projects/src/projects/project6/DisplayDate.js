import React, { useState } from 'react'
import './App.css'

function DisplayDate() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);
    //definition du format de date
    const date = new Date();
    date.setDate(date.getDate()+count)

    const handleChange = (val) => {
        // alert(val);
        setStep(val);
    }
    const handleDecrement = () => {
        // alert("decre");
        setCount((c) => c - step);
    }
    const handleIncrement = () => {
        // alert("incre");
        setCount((c) => c + step);

    }
    const handleReset =()=>{
        setStep(1);
        setCount(0);
    }

    return (
        <div className='container'>
            <div className='step-container'>
                <input className='range-input' type='range' min={1} value={step} max={30} onChange={(e) => handleChange(Number(e.target.value))} />
                <p className='step-label'>step: {step} </p>
            </div>

            <div className='counter-container'>
                <button className='btn' onClick={handleDecrement} >-</button>
                <input className='counter-input' value={count} onChange={(e)=>{setCount(Number(e.target.value))}}/>
                <button className='btn'  onClick={handleIncrement} >+</button>
            </div>
            <p className='date-display'>
            {
                count===0
                ?
                ('Today is ')
                :
                count>0
                    ?
                    (count+' days from today is ')
                    :
                    `${Math.abs(count)} days ago was `
            }
            {date.toDateString()}
            </p>
            {
                step===1 && count===0
                ?
                (null)
                :
                (<button className='btn reset-btn' onClick={handleReset}>Reset</button>)
            }
        </div>
    )
}

export default DisplayDate