import React from 'react';
import './Card.css';
import { useParams, useHistory } from 'react-router-dom';
import Preloader from './Preloader';

function Card({ images }) {
    const history = useHistory();


    let { id } = useParams();
    // the object keys start with 0, but the IDs in the API begin at 1
    id = id - 1;
    console.log(images)

    let friends = images; // достаём данные, используя деструктуризацию
    const friend = friends.find(f => f.id === id);

    return (
        <>
            <div className="card">
                <div className="card__container">

                    <div className="card__details">
                        <h3 className="card__title">Заголовок: {images[id].title}</h3>
                        <p className="card__id">ID картинки: {images[id].id}</p>
                        <p className="card__link">Ссылка на картинку: {images[id].url}</p>

                    </div>
                    <img className="card__pic" src={images[id].url} alt={images[id].title} />
                    
                </div>
                <button className="button button_type_back" onClick={() => history.push('/')}></button>
            </div>
            {/* {preloader && <Preloader />} */}


            {/* <div className="card"><img className="card__pic" src={friend.url} alt={friend.title} /></div> */}

        </>
    );
}

export default Card;
