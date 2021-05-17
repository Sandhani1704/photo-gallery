import React from 'react';
import './Card.css';
import { useParams, useHistory } from 'react-router-dom';
import Preloader from './Preloader';
import { PreloaderContext } from '../contexts/PreloaderContext';
import { getInitialPhotos } from '../utils/Api';

function Card({ images, cards }) {
    const history = useHistory();
    const { preloader, setPreloader } = React.useContext(PreloaderContext);

    let { id } = useParams();
    // the object keys start with 0, but the IDs in the API begin at 1
    id = id - 1;
    console.log(images)


    // let friends = images; 
    // const friend = friends.find(f => f.id === id);

    return (
        <>
            {preloader ? <Preloader /> :
                <div className="card">
                    <div className="card__container">

                        <div className="card__details">
                            <h3 className="card__title">Заголовок: {cards[id].title}</h3>
                            <p className="card__id">ID картинки: {cards[id].id}</p>
                            <p className="card__link">Ссылка на картинку: {cards[id].url}</p>

                        </div>
                        <img className="card__pic" src={cards[id].url} alt={cards[id].title} />

                    </div>
                    <button className="button button_type_back" onClick={() => history.push('/')}></button>
                </div>}

        </>
    );
}

export default Card;
