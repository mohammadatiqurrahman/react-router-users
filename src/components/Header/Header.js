import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const  activeStyle = {
        fontWeight: "bold",
        color: "red"
      }
    return (
        <div  className="nav-style">
            <nav>
            <NavLink className="navlink" activeStyle={activeStyle} to="/home">Home</NavLink>
            <NavLink className="navlink" activeStyle={activeStyle} to="/about">About</NavLink>
            <NavLink className="navlink" activeStyle={activeStyle} to="/friends">Friends</NavLink>
            </nav>
        </div>
    );
};

export default Header;