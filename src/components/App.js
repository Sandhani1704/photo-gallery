import React from 'react';
import Main from './Main';
import Header from './Header';
import './Main.css';
// import ImagePopup from './ImagePopup'
import { getInitialPhotos } from '../utils/Api';
import { HashRouter, Route, Switch, BrowserRouter } from 'react-router-dom';
import Card from './Card'
import About from './About'
import Preloader from './Preloader';
import Navigation from './Navigation';

function App() {
    const [cards, setCards] = React.useState([]);
    const [preloader, setPreloader] = React.useState(false);
    const [lodding, setLodding] = React.useState(true);
    // const [selectedCard, setSelectedCard] = React.useState({});
    // const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
    const [images, setImages] = React.useState([]);

    // const handleCardClick = (card) => {
    //     setSelectedCard(card)
    //     setIsImagePopupOpen(true);
    // }

    // function closeImagePopup() {
    //     setIsImagePopupOpen(false);
    //     setSelectedCard('');
    // }


    React.useEffect(() => {
        setPreloader(true);
        setLodding(false)
        setTimeout(() => {
            getInitialPhotos().then((res) => {
                if (res) {
                    // console.log(res)
                    setCards(res.slice(0, 24))
                    // console.log(cards)
                    // return res
                    setPreloader(false);
                    setLodding(true)
                }

            })
        }, 1000)
    }, []);

    React.useEffect(() => {
        setImages(cards)
        console.log(images)

    }, [cards]);



    return (
        <>
        <Header />
            <BrowserRouter>
            
                <Switch>
                    {/* <Route exact path="/">
                    <Navigation />
                    </Route> */}

                    <Route exact path="/">
                    
                        {lodding && <Main cards={cards}
                        // onCardClick={handleCardClick}
                        />}
                        {preloader && <Preloader />}
                        {/* <Navigation /> */}
                    </Route>

                    <Route path="/:id">
                        <Card cards={cards} images={images} />
                    </Route>

                    <Route exact path="/about">
                        <About />
                    </Route>

                </Switch>
            </BrowserRouter>
        </>
    )
}

export default App;
