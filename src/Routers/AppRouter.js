import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {IntlProvider} from 'react-intl';
import Navbar from '../Components/NavBar';
import LandingPage from '../Containers/LandingPage';
import AboutPage from '../Containers/AboutPage';
import PortfolioPage from '../Containers/PortfolioPage';


export default () => (
    <IntlProvider>
        <BrowserRouter>
            <div className="app-container">
                <Navbar/>
                <div className="container-component-container">
                    <Switch>
                        <Route path="/" component={LandingPage} exact={true}/>
                        <Route path="/about" component={AboutPage} exact={true}/>
                        <Route path="/portfolio" component={PortfolioPage} exact={true}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    </IntlProvider>
)