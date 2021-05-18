import React from 'react';
import Main from './Main';
import Header from './Header';
import './Main.css';
import './App.css';
import { getInitialPhotos } from '../utils/Api';
import { Route, Switch } from 'react-router-dom';
import Card from './Card'
import About from './About'
import Preloader from './Preloader';
import Navigation from './Navigation';
import { PreloaderContext } from '../contexts/PreloaderContext';

function App() {
    const [cards, setCards] = React.useState();
    const [preloader, setPreloader] = React.useState(false);
    const [lodding, setLodding] = React.useState(true);
    const [humburgerOpened, setHumburgerOpened] = React.useState(false);

    const handleBurgerMenuToggle = () => {
        if (!humburgerOpened) {
            setHumburgerOpened(true)
        } else {
            setHumburgerOpened(false)
        }
    }



    React.useEffect(() => {
        setPreloader(true);
        setLodding(false)
        setTimeout(() => {
            getInitialPhotos().then((res) => {
                if (res) {

                    setCards(res.slice(0, 24))

                    setPreloader(false);
                    setLodding(true)
                }

            })
        }, 500)
    }, []);

    // React.useEffect(() => {
    //     // we're fetching the review data from the server
    //     getInitialPhotos().then((res) => {
    //         return res.slice(0, 24);
    //     }).then((response) => {
    //         return response.json()
    //         // we're formatting the data and using setData() to update our state

    //     }).then((parsedReviews) => {
    //         const reviews = Object.values(parsedReviews);
    //         setCards(reviews)
    //         console.log(reviews)
    //     })
    // }, []);

   



       return (
        <PreloaderContext.Provider value={{ preloader, setPreloader }}>
            <>

                <Header handleBurgerMenuToggle={handleBurgerMenuToggle} />
                <Navigation handleBurgerMenuToggle={handleBurgerMenuToggle} humburgerOpened={humburgerOpened} />
                <Switch>

                    <Route exact path="/">

                        {lodding && <Main cards={cards}

                        />}
                        {preloader && <Preloader />}

                    </Route>
  

                    <Route exact path="/card/:id">
                        <Card cards={cards} />
                    </Route>

                    <Route exact path="/about">
                        <About />
                    </Route>

                </Switch>

            </>
        </PreloaderContext.Provider>
    )
}

export default App;
