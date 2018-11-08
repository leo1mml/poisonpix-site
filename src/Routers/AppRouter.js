import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {IntlProvider, addLocaleData} from 'react-intl';
import Navbar from '../Components/NavBar';
import LandingPage from '../Containers/LandingPage';
import AboutPage from '../Containers/AboutPage';
import PortfolioPage from '../Containers/PortfolioPage';
import Privacy from '../Containers/Privacy'

import en from "react-intl/locale-data/en";
import pt from "react-intl/locale-data/pt";

import localeData from "./../../build/locales/data.json";

addLocaleData([...en, ...pt]);

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
const language =
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage;

// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// Try full locale, try locale without region code, fallback to 'en'
const messages =
  localeData[languageWithoutRegionCode] ||
  localeData[language] ||
  localeData.en;

export default () => (
    <IntlProvider locale={language} messages={messages}>
        <BrowserRouter>
            <div className="app-container">
                <Navbar/>
                <div className="container-component-container">
                    <Switch>
                        <Route path="/" component={LandingPage} exact={true}/>
                        <Route path="/about" component={AboutPage} exact={true}/>
                        <Route path="/portfolio" component={PortfolioPage} exact={true}/>
                        <Route path="/privacypolicy" component={Privacy} exact={true}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    </IntlProvider>
)