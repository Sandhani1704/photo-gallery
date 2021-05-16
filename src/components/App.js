import React from 'react';
import Main from './Main';
import Header from './Header';
import './Main.css';
import './App.css';
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
    const [images, setImages] = React.useState([]);
    const [humburgerOpened, setHumburgerOpened] = React.useState(false);

    const handleBurgerMenuClick = () => {
        if (!humburgerOpened) {
            setHumburgerOpened(true)
        } else {
            setHumburgerOpened(false)
        }
    }

    const handleBurgerMenuClose = () => {
        setHumburgerOpened(false);
    }


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

            <BrowserRouter>
                <Header handleBurgerMenuClick={handleBurgerMenuClick} />
                {humburgerOpened && <Navigation handleBurgerMenuClose={handleBurgerMenuClose} />}
                <Switch>

                    <Route exact path="/">

                        {lodding && <Main cards={cards}

                        />}
                        {preloader && <Preloader />}

                    </Route>

                    <Route exact path="/about">
                        <About />
                    </Route>

                    <Route path="/:id">
                        <Card cards={cards} images={images} />
                    </Route>

                </Switch>
            </BrowserRouter>
        </>
    )
}

export default App;
