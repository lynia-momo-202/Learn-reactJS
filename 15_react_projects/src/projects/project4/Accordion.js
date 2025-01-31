import React, { useState } from 'react'
import './App.css'
import AccordionItem from './AccordionItem'
import AccordionSingleItem from './AccordionSingleItem'
import data from './data'

function Accordion() {
    let i = 1, j = 1;
    const [select, setSelect] = useState(null)

    const handleshowItem = (id) => {
        // alert("hllo")
        setSelect(id !== select ? id : null);
    }

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
                        number={i++}
                        question={faq.question}
                        answer={faq.answer}
                    />

                )
                )
            }
            <p className='faq'>
                ------------------------
            </p>

            {
                data.map((faq) => (
                    <AccordionSingleItem
                        key={j}
                        number={j++}
                        question={faq.question}
                        answer={faq.answer}
                        select = {select}
                        handleshowItem={handleshowItem}
                    />

                )
                )
            }

        </main>
    )
}

export default Accordion