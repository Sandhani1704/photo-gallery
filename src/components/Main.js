import React from 'react';
import './Main.css';
import { Link, useHistory } from 'react-router-dom';
import Img from '../images/blue.svg';
import { PreloaderContext } from '../contexts/PreloaderContext';

function Main({ cards }) {
    const history = useHistory();
    const { preloader, setPreloader } = React.useContext(PreloaderContext);

    // const handleCardClick = () => {
    //     setPreloader(true);
    //     setTimeout(() => {
    //         history.push(`/card/${card.id}`)
    //         setPreloader(false);
    //     }, 500)
    // }

    return (
        <main className="content">

            <section className="images">

                <div className="images__container">
                    <p>Категория №1</p>
                    <div className="images__cards-container">
                        {cards.slice(0, 6).map((card) => (
                            // <Link to={`/card/${card.id}`}>
                            <div className="image__container">
                                <img src={card.url} alt={card.title} className="image image_main" />
                                <img src={Img} alt={card.title} className="image image_blue" />
                                <button className="images__button" onClick={() => {
                                    setPreloader(true);
                                    setTimeout(() => {
                                        history.push(`/card/${card.id}`)
                                        setPreloader(false);
                                    }, 2000)
                                }}>ПОДРОБНЕЕ</button>
                            </div>
                            // </Link>
                        ))}
                    </div>
                </div>
                <div className="images__container">
                    <p>Категория №2</p>
                    <div className="images__cards-container">
                        {cards.slice(6, 12).map((card) => (

                            <Link to={`/card/${card.id}`}>
                                <div className="image__container">
                                    <img src={card.url} alt={card.title} className="image image_main" />
                                    <img src={Img} alt={card.title} className="image image_blue" />
                                    <button className="images__button">ПОДРОБНЕЕ</button>
                                </div>
                            </Link>

                        ))}
                    </div>
                </div>

                <div className="images__container">

                    <p>Категория №3</p>
                    <div className="images__cards-container">
                        {cards.slice(12, 18).map((card) => (

                            <Link to={`/card/${card.id}`}>
                                <div className="image__container">
                                    <img src={card.url} alt={card.title} className="image image_main" />
                                    <img src={Img} alt={card.title} className="image image_blue" />
                                    <button className="images__button">ПОДРОБНЕЕ</button>
                                </div>
                            </Link>

                        ))}
                    </div>
                </div>

                <div className="images__container">
                    <p>Категория №4</p>
                    <div className="images__cards-container">
                        {cards.slice(18, 24).map((card) => (

                            <Link to={`/card/${card.id}`}>
                                <div className="image__container">
                                    <img src={card.url} alt={card.title} className="image image_main" />
                                    <img src={Img} alt={card.title} className="image image_blue" />
                                    <button className="images__button">ПОДРОБНЕЕ</button>
                                </div>
                            </Link>

                        ))}
                    </div>
                </div>

            </section>

        </main >

    );
}



export default Main;