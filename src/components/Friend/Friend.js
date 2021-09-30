import React from 'react';
import { Link,useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {id,name,email,website,address}= props.friend
    const stylesheet = {
        border: '2px solid goldenrod',
        margin: '5px',
        padding: '10px',
        borderRadius: '5px'
    }
    const histry = useHistory()
    const url =`/friend/${id}`
    const handleClik = () =>{
        histry.push(`/friend/${id}`)
    }
    return (
        <div style={stylesheet}>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
            <p><small>Address: {address.city}</small></p>
            <Link to={url}>Visit me</Link>
            <br />
            <button onClick={handleClik}>visit me</button>
        </div>
    );
};

export default Friend;