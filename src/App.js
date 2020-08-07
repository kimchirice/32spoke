import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation'
import {WheelContextProvider} from './Context/WheelContext'

function App() {
  return (
    <div className="App">
      <WheelContextProvider>
        <Navigation />
      </WheelContextProvider>
    </div>
  );
}

export default App;
