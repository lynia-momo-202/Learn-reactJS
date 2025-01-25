import React, { useState } from 'react'
import './App.css'
import Friends from './Friends'
import data from './data'
function FriendList() {

    const [friendData,setFriendData]=useState(data)

    const handleClick = () =>{
        // alert("delete");
        const tab=[];
        setFriendData(tab);
    }

  return (
        <div className='friends-container'>
            <h2>I have {friendData.length} Friends</h2>
            <div className='friend-list'>
                {friendData.map((friend) => (
                    <Friends
                        key={friend.id}
                        name={friend.name}
                        age={friend.age}
                        image={friend.image} 
                        />
                ))}
            </div>
            {  friendData.length >0 ?
            (<button className='clear-button' onClick={handleClick}>clear All</button>) 
            : null}     
         </div>
  )
}

export default FriendList