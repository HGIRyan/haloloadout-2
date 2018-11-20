import React, { Component } from 'react';
import './reset.css'
import './App.css';
import LoadoutCurrent from './components/LoadoutCurrent'

class App extends Component {
  render() {
    console.log('state:', this.state)
    return (
      <div className="App">
        <LoadoutCurrent/>
      </div>
    );
  }
}

export default App;
