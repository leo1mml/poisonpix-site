import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../Containers/LandingPage';

export default () => (
  <div className="app-container">
    <BrowserRouter>
      <div className="container-component-container">
        {/* <NavBar/> */}
        <Switch>
            <Route path="/" component={LandingPage} exact={true}/>
        </Switch>
      </div>
    </BrowserRouter>
  </div>
)