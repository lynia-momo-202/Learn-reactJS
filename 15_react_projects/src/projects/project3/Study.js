import React, { useState } from 'react'
import quizQuestions from './data'
import './App.css'

function Study() {

    const [selectId,setSelectId] = useState(null);

    const handleAnswer = (id) => {
        setSelectId(id !== selectId ? id : null);
    } 

  return (
    <div className='card-grid'>
        {quizQuestions.map((quest)=> 
            (
                <div className= {`card ${selectId===quest.id ? "active" : ""}`} onClick={() => handleAnswer(quest.id)}>
                    {selectId===quest.id ? quest.answer : quest.question}
                </div>
            )
        )}
    </div>
  )
}

export default Study