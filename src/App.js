import React, { Component } from 'react';
import 'normalize.css';
import './App.css';
import AppRouter from './Routers/AppRouter';
import Loader from './Components/Loader';

class App extends Component {

  state = {
    shouldRenderApp: false
  }

  componentDidMount() {
    window.addEventListener("load", () =>{
      this.setState({shouldRenderApp: true})
    })
  }

  render() {
    return (
      this.state.shouldRenderApp ? <AppRouter/> : <Loader/>
    )
  }
}

export default App;
