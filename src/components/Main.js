import React from 'react';
import Card from './Card';

function Main({ onCardClick, cards }) {

    return (
        <main className="content">

            <section className="elements">

                {cards.map((card) => (
                    <Card key={card._id}
                        onCardClick={onCardClick}
                        card={card}

                    />

                ))}

            </section>

        </main>

    );
}



export default Main;