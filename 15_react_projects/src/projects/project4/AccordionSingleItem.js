function AccordionSingleItem({number, question, select ,handleshowItem,children}) {
    // const { number, question, select ,handleshowItem} = props
    
    return (
        <div className={`accordion ${number === select ? 'active' : ''}`}>
            <div className='accordion-header ' onClick={() => handleshowItem(number)}>
                <span className='accordion-icon'>
                    {number === select ? '-' : '+'}
                </span>
                <span className='accordion-number'>{number<10? `0${number}`: number}</span>
                <span className='accordion-title'>{question}</span>
            </div>
             <div className='accordion-content'>
                {number === select ? children:''}
            </div>
        </div>
    )
}

export default AccordionSingleItem