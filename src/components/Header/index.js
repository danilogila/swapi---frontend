import React from 'react';
import Logo from '../../assets/logo.png';
import './styles.css';

const Header = () => {
    return (
        <header>
            <img src={Logo} alt="Star Wars logo" />
        </header>
    );
};

export default Header;
