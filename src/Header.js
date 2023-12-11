import React from 'react';
import './Header.css'

import AdobePicture from './assets/Adobe_Acrobat_DC_logo_2020.svg.png';

const Header = () => {
    return (
        <header className='App-header'>
            <img src={AdobePicture} alt="Acrobat Logo" className="Header-logo"/>
            <div className="vertical-line"></div>
        </header>
    );
};

export default Header;

