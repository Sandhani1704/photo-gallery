import React from 'react';
import Main from './Main';
import ImagePopup from './ImagePopup'
import { getInitialPhotos } from '../utils/Api';

function App() {
    const [cards, setCards] = React.useState([]);
    const [selectedCard, setSelectedCard] = React.useState({});
    const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

    const handleCardClick = (card) => {
        setSelectedCard(card)
        setIsImagePopupOpen(true);
    }


    React.useEffect(() => {
        getInitialPhotos().then((res) => {
            if (res) {
                console.log(res)
                setCards(res)
            }
        });
    }, []);

    return (
        <>
            <Main cards={cards}
                onCardClick={handleCardClick}
            />
            <ImagePopup
                card={selectedCard}
                isOpen={isImagePopupOpen}
                />
        </>
    )
}

export default App;
