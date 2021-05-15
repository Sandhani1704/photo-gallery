import React from 'react';

import './Header.css';
import Navigation from './Navigation';

function Header() {
    const [humburgerOpened, setHumburgerOpened] = React.useState(false);

    return (
        <header className="header">
            <button className="header__button" onClick={() => {
                setHumburgerOpened(true);
            }}></button>
           {humburgerOpened && <Navigation /> } 
        </header>
    )
}

export default Header;