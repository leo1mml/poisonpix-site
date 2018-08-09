import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../Components/NavBar';
import LandingPage from '../Containers/LandingPage';


export default () => (
  <div className="app-container">
    <BrowserRouter>
      <div className="container-component-container">
        <Navbar/>
        <Switch>
            <Route path="/" component={LandingPage} exact={true}/>
        </Switch>
      </div>
    </BrowserRouter>
  </div>
)