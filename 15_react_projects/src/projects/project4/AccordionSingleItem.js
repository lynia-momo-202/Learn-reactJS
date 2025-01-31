function AccordionSingleItem(props) {
    const { number, question, answer, select ,handleshowItem} = props
    
    return (
        <div className={`accordion ${number === select ? 'active' : ''}`}>
            <div className='accordion-header ' onClick={() => handleshowItem(number)}>
                <span className='accordion-icon'>
                    {number === select ? '-' : '+'}
                </span>
                <span className='accordion-number'>{number}</span>
                <span className='accordion-title'>{question}</span>
            </div>
            <div className='accordion-content'>
                {number === select ? answer : ''}
            </div>
        </div>
    )
}

export default AccordionSingleItem