import React from 'react';

import './Header.css';

function Header({handleBurgerMenuToggle}) {

    return (
        <header className="header">
            <button className="header__button" onClick={() => {
                handleBurgerMenuToggle();
            }}></button>
           
        </header>
    )
}

export default Header;