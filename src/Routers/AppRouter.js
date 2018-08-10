import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../Components/NavBar';
import LandingPage from '../Containers/LandingPage';


export default () => (
  <BrowserRouter>
    <div className="app-container">
        <Navbar/>
        <div className="container-component-container">
          <Switch>
              <Route path="/" component={LandingPage} exact={true}/>
          </Switch>
        </div>
    </div>
  </BrowserRouter>
)