import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h2>Welcome to my Rest Countries</h2>
            <nav>
                <a href="/home">Home</a>
                <a href="/countries">Countries</a>
                <a href="/about">About</a>
            </nav>
        </div>
    );
};

export default Header;