import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams()
    const btn = useHistory()

    const [friend,setFriend] = useState({})
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFriend(data))
    },[])
    const handleClick = ()=>{
        btn.push('/friends')
    }
    return (
        <div>
            <h3>Friend Details I'd with: {friendId}</h3>
            <h3>Name: {friend.name}</h3>
            <p>Email: {friend.email}</p>
            <p><small>Phone: {friend.phone}</small></p>
            <p>Address: {friend.company?.name}</p>
            <button onClick={handleClick}>see all friends</button>
          


        </div>
    );
};

export default FriendDetail;