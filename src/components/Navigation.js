import React from 'react';
import './Navigation.css';
import { useHistory } from 'react-router-dom';
import { PreloaderContext } from '../contexts/PreloaderContext';
import avatar from '../images/123.png'

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
            {/* { humburgerOpened && */}
                <div className={`humburger-menu ${humburgerOpened && 'humburger-menu_opened'}`}>
                    <div className='humburger-menu__overlay'></div>
                    <div className="humburger-menu__container">

                    <div className='profile'>
                        <img className='profile__avatar' src={avatar} alt='Аватар' />
                        <div className='profile__info'>
                        <p className='profile__name'>Анна Галкина</p>
                        <p className='profile__email'>angalkina1704@gmail.com</p>
                        </div>
                    </div>

                    <nav className="nav">
                        <ul className="nav-list">

                            <li className="nav-list__item">
                                <button className="nav-list__link" onClick={handleNavGalleryClick}>Галерея</button>
                            </li>
                            <li className="nav-list__item">
                                <button className="nav-list__link" onClick={handleNavAboutClick}>Обо мне</button>
                            </li>

                        </ul>
                        
                    </nav>
                    </div>
                </div>
                {/* } */}
        </>
    )

}

export default Navigation;