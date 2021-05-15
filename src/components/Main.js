import React from 'react';
import './Main.css';
import Card from './Card';
import { Link, useRouteMatch } from 'react-router-dom';
import { useParams } from 'react-router-dom';


function Main({ onCardClick, cards }) {
    const { path } = useRouteMatch();
    const { id } = useParams();
          
    // const cardItem = cards.find((h) => h.id === id);
    // console.log(cards)

    return (
        <main className="content">

            <section className="elements">
            
                <div className="elements__container">
                    <p>Категория №1</p>
                    <div className="elements__cards-container">
                        {cards.slice(0, 6).map((card) => (
                            // <Link to={`${path}/${card.id}`}>
                            <Card key={card.id}
                                onCardClick={onCardClick}
                                card={card}
                                cards={cards}
                                // cardItem={cardItem}
                            />
                            // </Link>
                        ))}
                    </div>
                </div>
                <div className="elements__container">
                    <p>Категория №2</p>
                    <div className="elements__cards-container">
                        {cards.slice(6, 12).map((card) => (

                            <Card key={card.id}
                                onCardClick={onCardClick}
                                card={card}
                                
                            />

                        ))}
                    </div>
                </div>

                <div className="elements__container">

                    <p>Категория №3</p>
                    <div className="elements__cards-container">
                        {cards.slice(12, 18).map((card) => (

                            <Card key={card.id}
                                onCardClick={onCardClick}
                                card={card}

                            />

                        ))}
                    </div>
                </div>

                <div className="elements__container">
                    <p>Категория №4</p>
                    <div className="elements__cards-container">
                        {cards.slice(18, 24).map((card) => (

                            <Card key={card.id}
                                onCardClick={onCardClick}
                                card={card}

                            />

                        ))}
                    </div>
                </div>
                
            </section>

        </main >

    );
}



export default Main;