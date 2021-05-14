import React from 'react';

function Card({ card, onCardClick}) {

    function handleClick() {
        onCardClick(card)
    }

    return (

        <div id="element">
            <div className="elements__card">
                
                <img src={card.url} alt={card.title} onClick={handleClick} className="elements__card-image" />

                <div className="elements__card-description">
                    <p className="elements__card-name">{card.title}</p>
                    {/* <div className="elements__like-container">
                        
                    </div> */}
                </div>
            </div>
        </div>


    );
}

export default Card;