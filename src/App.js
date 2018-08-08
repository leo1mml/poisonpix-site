import React, { Component } from 'react';
import 'normalize.css';
import './App.css';
import AppRouter from './Routers/AppRouter';

class App extends Component {
  render() {
    return (
      <AppRouter/>
    );
  }
}

export default App;
