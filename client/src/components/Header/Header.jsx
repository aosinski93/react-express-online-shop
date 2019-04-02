import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <ul className="navigation">
                <Link to="/">Home</Link>
                <Link to="/store">Store</Link>
                <Link to="/contact">Contact</Link>
            </ul>
        </div> 
    )

}

export default Header;