import React, { useState } from 'react';
import './Navigation.css';
import { Link, useLocation } from 'react-router-dom';
import { HashRouter, Route, Switch, BrowserRouter, NavLink, useHistory } from 'react-router-dom';

function Navigation({ handleBurgerMenuClose }) {
    const history = useHistory();

    // const location = useLocation();

    return (
        <BrowserRouter>
            <nav className="nav nav_opened">

                <ul className="nav-list">
                    {/* <div className="nav__overlay"></div> */}
                    <li className="nav-list__item">
                        <button className="nav-list__link" onClick={() => {
                            history.push('/')
                            handleBurgerMenuClose();
                        }
                        }>Галерея</button>
                    </li>
                    <li className="nav-list__item">
                        <button className="nav-list__link" onClick={() => {
                            history.push('/about')
                            handleBurgerMenuClose();
                    }}>Обо мне</button>
                    </li>

                </ul>
            </nav>
        </BrowserRouter>
    )

}

export default Navigation;