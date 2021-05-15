import React from 'react';
import './Card.css';
import { Link, useRouteMatch } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getInitialPhotos } from '../utils/Api';

function Card({ card, onCardClick, cards, cardItem }) {

    const [images, setImages] = React.useState([]);
    const { path } = useRouteMatch();
    const { id } = useParams();
    console.log(cards)   
    const cardI = cards.find((h) => h.id === id);


    // console.log(cardI)
    const allImages = cardI;

    React.useEffect(() => {
        if (allImages === undefined) {
            return;
        }
        setImages(allImages?.slice(0, 5));
    }, [allImages]);

    function handleClick() {
        onCardClick(card)
    }

    return (
        <Link to={`/${card.id}`}>
            <div id="element">
                <div className="elements__card">

                    <img src={card.url} alt={card.title} onClick={handleClick} className="elements__card-image" />
                    {/* <div className="elements__card-image">
                        <img src={cardItem.url} alt={cardItem.title} className="image" />
                        <p className="image__caption">Заголовок: {cardItem.title}</p>
                        <p className="image__caption">Ссылка на картинку: {cardItem.url}</p>
                        <p className="image__caption">ID картинки: {cardItem.id}</p>
                    </div> */}

                </div>
            </div>
        </Link>
        // <div className="image__container">
        //     <img src={card.url} alt={card.title} className="image" />
        //     <p className="image__caption">Заголовок: {card.title}</p>
        //     <p className="image__caption">Ссылка на картинку: {card.url}</p>
        //     <p className="image__caption">ID картинки: {card.id}</p>
        // </div>


    );
}

export default Card;