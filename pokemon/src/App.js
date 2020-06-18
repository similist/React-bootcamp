import React from 'react';
import Pokegame from './Pokegame';
import Button from './button';
import BrokenClick from './BrokenClick';
import './App.css';

function App() {
  return (
    <div className="App">
      <Pokegame />
      <Button />
      <BrokenClick />
    </div>
  );
}

export default App;
