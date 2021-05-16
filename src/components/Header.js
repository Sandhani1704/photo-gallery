import React from 'react';

import './Header.css';
import Navigation from './Navigation';

function Header({handleBurgerMenuClick}) {
    

    return (
        <header className="header">
            <button className="header__button" onClick={() => {
                handleBurgerMenuClick();
            }}></button>
           {/* {humburgerOpened && <Navigation /> }  */}
        </header>
    )
}

export default Header;