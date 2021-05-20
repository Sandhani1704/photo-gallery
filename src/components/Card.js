import React from 'react';
import './Card.css';
import { useParams, useHistory } from 'react-router-dom';
import { PreloaderContext } from '../contexts/PreloaderContext';

function Card({ cards }) {
    const history = useHistory();
    const { setPreloader } = React.useContext(PreloaderContext);
    
    let { id } = useParams();
    
    id = id - 1;

    function handleCardBackClick() {
        setPreloader(true);
        setTimeout(() => {
            history.push(`/`)
            setPreloader(false);
        }, 500)
    }

    return (
        <>
            { cards && <div className="card">
                <div className="card__container">

                    <div className="card__details">
                        <h3 className="card__title">Заголовок: {cards[id].title}</h3>
                        <p className="card__id">ID картинки: {cards[id].id}</p>
                        <p className="card__link">Ссылка на картинку: {cards[id].url}</p>

                    </div>
                    <img className="card__pic" src={cards[id].url} alt={cards[id].title} />

                </div>
                <button className="button button_type_back" onClick={handleCardBackClick}></button>
            </div>}
        </>
    );
}

export default Card;
