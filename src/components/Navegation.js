import React from "react";
import { Link } from 'react-router-dom';

const Navegation = () =>{
    return(
        <div>
            <Link to="/">Home</Link>  |
            <Link to="/service">Services</Link>  |
            <Link to="/contact">Contacts</Link>  |
            <Link to="/about">About</Link>  |
        </div>
    )
}

export default Navegation;


