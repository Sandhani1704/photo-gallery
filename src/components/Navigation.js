import React from 'react';
import './Navigation.css';
import { useHistory } from 'react-router-dom';
import { PreloaderContext } from '../contexts/PreloaderContext';

function Navigation({ handleBurgerMenuToggle, humburgerOpened }) {
    const history = useHistory();
    const { setPreloader } = React.useContext(PreloaderContext);

    const handleNavAboutClick = () => {
        setPreloader(true);
        setTimeout(() => {

            handleBurgerMenuToggle()
            history.push(`/about`)
            setPreloader(false);
        }, 500)

    }

    const handleNavGalleryClick = () => {
        setPreloader(true);
        setTimeout(() => {

            handleBurgerMenuToggle()
            history.push(`/`)
            setPreloader(false);
        }, 500)

    }

    React.useEffect(() => {
        function handleEscClose(evt) {
            if (evt.key === 'Escape') {
                handleBurgerMenuToggle();
            }
        }

        function closeByOverlayClick(evt) {
            if (evt.target.classList.contains('nav__overlay')) {
                handleBurgerMenuToggle();
            }
        }

        document.addEventListener('keydown', handleEscClose);
        document.addEventListener('click', closeByOverlayClick);

        return () => {
            document.removeEventListener('keydown', handleEscClose);
            document.removeEventListener('click', closeByOverlayClick);
        };
    });

    return (
        <>
            { humburgerOpened && <nav className="nav nav_opened">

                <ul className="nav-list">
                    <div className="nav__overlay"></div>
                    <li className="nav-list__item">
                        <button className="nav-list__link" onClick={handleNavGalleryClick}>Галерея</button>
                    </li>
                    <li className="nav-list__item">
                        <button className="nav-list__link" onClick={handleNavAboutClick}>Обо мне</button>
                    </li>

                </ul>
            </nav>}
        </>
    )

}

export default Navigation;