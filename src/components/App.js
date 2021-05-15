import React from 'react';
import Main from './Main';
import './Main.css';
// import ImagePopup from './ImagePopup'
import { getInitialPhotos } from '../utils/Api';
import { HashRouter, Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import Card from './Card'

function App() {
    const [cards, setCards] = React.useState([]);
    const [selectedCard, setSelectedCard] = React.useState({});
    const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
    // const [images, setImages] = React.useState([]);

    const handleCardClick = (card) => {
        setSelectedCard(card)
        setIsImagePopupOpen(true);
    }

    function closeImagePopup() {
        setIsImagePopupOpen(false);
        setSelectedCard('');
    }


    React.useEffect(() => {
        getInitialPhotos().then((res) => {
            if (res) {
                // console.log(res)
                setCards(res.slice(0, 24))                
                console.log(cards)
                return res
            }
            
        })
        // .then((res) => {
        //     setImages(res.slice(0, 24))
        //     console.log(res)
            
        // })
    }, []);

    
    return (
        <>
            <HashRouter>
                <Switch>

                    <Route exact path="/">
                        <Main cards={cards}
                            onCardClick={handleCardClick}
                            
                        />
                    </Route>

                    <Route path="/:id">
                        {/* <ImagePopup
                            card={selectedCard}
                            isOpen={isImagePopupOpen}
                            closeImagePopup={closeImagePopup}
                        /> */}
                        
                        <Card />
                        {/* <div className="image__caption">123</div> */}
                    </Route>
                </Switch>
            </HashRouter>
        </>
    )
}

export default App;
