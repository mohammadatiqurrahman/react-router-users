import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './Friends.css'

const Contact = () => {
    const [friends,setFriends] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriends(data))
    },[])
    return (
        <div>
            <h1>Friends Found: {friends.length}</h1>
            <div className="friends-container">
                {
                    friends.map(friend=><Friend key={friend.id} friend={friend}></Friend>)
                }
            </div>
        </div>
    );
};

export default Contact;