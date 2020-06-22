import React, {Component} from 'react';
import RollDice from './RollDice';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RollDice /> 
      </div>
    );
  }
}

export default App;
