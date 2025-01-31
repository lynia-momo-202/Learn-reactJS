import React, { useState } from 'react'

function AccordionItem(props) {
    const {number,question,answer} = props
    const [show,setShow] = useState(0)
    const handleshow = () =>{
        // alert("hllo")
        {show? setShow(0) : setShow(1)}
    }
    return (
        <div className={`accordion ${show? 'active' : ''}`}>
            <div className='accordion-header ' onClick={handleshow}>
                <span className='accordion-icon'>
                    {show? '-' : '+'}
                    </span>
                <span className='accordion-number'>{number}</span>
                <span className='accordion-title'>{question}</span>
            </div>
            <div className='accordion-content'>
            {show? answer : ''}
            </div>
        </div>
    )
}

export default AccordionItem