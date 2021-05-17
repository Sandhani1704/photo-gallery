import React from 'react';

import './Header.css';
import Navigation from './Navigation';

function Header({handleBurgerMenuToggle}) {
    

    return (
        <header className="header">
            <button className="header__button" onClick={() => {
                handleBurgerMenuToggle();
            }}></button>
           {/* {humburgerOpened && <Navigation /> }  */}
        </header>
    )
}

export default Header;