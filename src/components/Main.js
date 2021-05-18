import React from 'react';
import './Main.css';
import { useHistory } from 'react-router-dom';
import Img from '../images/blue.svg';
import { PreloaderContext } from '../contexts/PreloaderContext';

function Main({ cards }) {
    const history = useHistory();
    const { setPreloader } = React.useContext(PreloaderContext);

    function handleCardClick(card) {
        setPreloader(true);
        setTimeout(() => {
            history.push(`/card/${card.id}`)
            setPreloader(false);
        }, 500)
    }

    return (
        <main className="content">

            <section className="images">

                <div className="images__container">
                    <p>Категория №1</p>
                    <div className="images__cards-container">
                        { cards && cards.slice(0, 6).map((card) => (
                            
                            <div className="image__container" key={card.id}>
                                <img src={card.url} alt={card.title} className="image image_main" />
                                <img src={Img} alt={card.title} className="image image_blue" />
                                <button className="images__button" onClick={() => {handleCardClick(card)}}>ПОДРОБНЕЕ</button>
                            </div>
                            
                        ))}
                    </div>
                </div>
                <div className="images__container">
                    <p>Категория №2</p>
                    <div className="images__cards-container">
                        { cards && cards.slice(6, 12).map((card) => (

                            <div className="image__container" key={card.id}>
                                <img src={card.url} alt={card.title} className="image image_main" />
                                <img src={Img} alt={card.title} className="image image_blue" />
                                <button className="images__button" onClick={() => {handleCardClick(card)}}>ПОДРОБНЕЕ</button>
                            </div>

                        ))}
                    </div>
                </div>

                <div className="images__container">

                    <p>Категория №3</p>
                    <div className="images__cards-container">
                        {cards && cards.slice(12, 18).map((card) => (

                            <div className="image__container" key={card.id}>
                                <img src={card.url} alt={card.title} className="image image_main" />
                                <img src={Img} alt={card.title} className="image image_blue" />
                                <button className="images__button" onClick={() => {handleCardClick(card)}}>ПОДРОБНЕЕ</button>
                            </div>

                        ))}
                    </div>
                </div>

                <div className="images__container">
                    <p>Категория №4</p>
                    <div className="images__cards-container">
                        {cards && cards.slice(18, 24).map((card) => (

                            <div className="image__container" key={card.id}>
                                <img src={card.url} alt={card.title} className="image image_main" />
                                <img src={Img} alt={card.title} className="image image_blue" />
                                <button className="images__button" onClick={() => {handleCardClick(card)}}>ПОДРОБНЕЕ</button>
                            </div>

                        ))}
                    </div>
                </div>

            </section>

        </main >

    );
}



export default Main;