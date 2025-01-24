import React from 'react'

function Friends(props) {
    const {name,age,image} = props
  return (
    <div className='friend-card '>
        <img alt={name} src={image}/>
        <div>
            <h4>{name}</h4>
            <p>{age} years</p>
        </div>
    </div>
  )
}

export default Friends