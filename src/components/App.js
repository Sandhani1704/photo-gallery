import React from 'react';
import Main from './Main';
import Header from './Header';
import Card from './Card'
import About from './About'
import Preloader from './Preloader';
import Navigation from './Navigation';
import { getInitialPhotos } from '../utils/Api';
import { Route, Switch, useLocation } from 'react-router-dom';
import { PreloaderContext } from '../contexts/PreloaderContext';

function App() {
    const [cards, setCards] = React.useState();
    const [preloader, setPreloader] = React.useState(false);
    const [humburgerOpened, setHumburgerOpened] = React.useState(false);
    const location = useLocation()

    const handleBurgerMenuToggle = () => {
        if (!humburgerOpened) {
            setHumburgerOpened(true)
        } else {
            setHumburgerOpened(false)
        }
    }

    React.useEffect(() => {
        setPreloader(true);

        setTimeout(() => {
            getInitialPhotos().then((res) => {
                if (res) {

                    setCards(res.slice(0, 24))

                    setPreloader(false);

                }

            })
        }, 500)
    }, [cards]);

    React.useEffect(() => {
        setPreloader(false)
      }, [location])

    return (
        <PreloaderContext.Provider value={{ preloader, setPreloader }}>
            <>

                <Header handleBurgerMenuToggle={handleBurgerMenuToggle} />
                <Navigation handleBurgerMenuToggle={handleBurgerMenuToggle} humburgerOpened={humburgerOpened} />
                <Switch>

                    <Route exact path="/">

                        {preloader ? <Main cards={cards}

                        /> : <Preloader />}
                        
                    </Route>

                    <Route exact path="/card/:id">
                    { preloader ? <Card cards={cards} /> : <Preloader />}
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
