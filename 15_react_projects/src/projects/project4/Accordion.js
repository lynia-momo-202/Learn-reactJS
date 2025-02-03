import React, { useState } from 'react'
import './App.css'
import AccordionItem from './AccordionItem'
import AccordionSingleItem from './AccordionSingleItem'
import data from './data'

function Accordion() {
    const [select, setSelect] = useState(null)

    const handleshowItem = (id) => {
        // alert("hllo")
        setSelect(id !== select ? id : null);
    }

    return (
        <main className='accordion-container'>

            <h3 className='faq'>
                    Frequently Asked Questions (FAQ's)
            </h3>
            {
                data.map((faq,index) => (
                    <AccordionItem
                        key={index}
                        number={index+1}
                        question={faq.question}
                        answer={faq.answer}
                    />

                )
                )
            }
            <h3 className='faq'>
                ------------------------
            </h3>

            {
                data.map((faq,index) => (
                    <AccordionSingleItem
                        key={index}
                        number={index+1}
                        question={faq.question}
                        select = {select}
                        handleshowItem={handleshowItem}
                    >{faq.answer}</AccordionSingleItem>

                )
                )
            }

        </main>
    )
}

export default Accordion