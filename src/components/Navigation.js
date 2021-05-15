import React, { useState } from 'react';
import './Navigation.css';
import { Link, useLocation } from 'react-router-dom';
import { HashRouter, Route, Switch, BrowserRouter, NavLink } from 'react-router-dom';

function Navigation() {
    
    // const location = useLocation();

    return (
        <BrowserRouter>
        <nav className="nav nav_opened">
          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink className="nav-list__link" to="/">Галерея</NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink className="nav-list__link" to="/about">Обо мне</NavLink>
            </li>
            
          </ul>
        </nav>
        </BrowserRouter>
    )

}

export default Navigation;