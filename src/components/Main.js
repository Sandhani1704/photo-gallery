import React from 'react';
import './Main.css';
// import Card from './Card';
import { Link, useRouteMatch } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Img from '../images/123.png';


function Main({ cards }) {
    // const { path } = useRouteMatch();
    // const { id } = useParams();


    return (
        <main className="content">

            <section className="images">

                <div className="images__container">
                    <p>Категория №1</p>
                    <div className="images__cards-container">
                        {cards.slice(0, 6).map((card) => (
                            <Link to={`/${card.id}`}>
                                <div className="image__container">
                                    <img src={card.url} alt={card.title} className="image1"/>
                                    <img src={Img} alt={card.title} className="image2"/>
                                    <button className="images__button">ПОДРОБНЕЕ</button>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="images__container">
                    <p>Категория №2</p>
                    <div className="images__cards-container">
                        {cards.slice(6, 12).map((card) => (

                            // <Card key={card.id}
                            //     onCardClick={onCardClick}
                            //     card={card}

                            // />
                            <Link to={`/${card.id}`}>
                                <img src={card.url} alt={card.title} className="images__card-image" />
                            </Link>

                        ))}
                    </div>
                </div>

                <div className="images__container">

                    <p>Категория №3</p>
                    <div className="images__cards-container">
                        {cards.slice(12, 18).map((card) => (

                            // <Card key={card.id}
                            //     onCardClick={onCardClick}
                            //     card={card}

                            // />
                            <Link to={`/${card.id}`}>
                                <img src={card.url} alt={card.title} className="images__card-image" />
                            </Link>

                        ))}
                    </div>
                </div>

                <div className="images__container">
                    <p>Категория №4</p>
                    <div className="images__cards-container">
                        {cards.slice(18, 24).map((card) => (

                            // <Card key={card.id}
                            //     onCardClick={onCardClick}
                            //     card={card}

                            // />
                            <Link to={`/${card.id}`}>
                                <img src={card.url} alt={card.title} className="images__card-image" />
                            </Link>

                        ))}
                    </div>
                </div>

            </section>

        </main >

    );
}



export default Main;