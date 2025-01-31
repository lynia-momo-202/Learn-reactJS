import React from 'react'
import './App.css'
import AccordionItem from './AccordionItem'
import AccordionSingleItem from './AccordionSingleItem'
import data from './data'

function Accordion() {
    let i = 1 ;
    return (
        <main className='accordion-container'>
            <p className='faq'>
                <strong>
                    Frequently Asked Questions (FAQ's)
                </strong>
            </p>

            {
                data.map((faq) => (
                    <AccordionItem 
                    key={i}
                    number = {i++}
                    question = { faq.question}
                    answer = {faq.answer}
                    />
                    
                )
            )
            }
            <p className='faq'>
                ------------------------
            </p>
            <AccordionSingleItem />
        </main>
    )
}

export default Accordion