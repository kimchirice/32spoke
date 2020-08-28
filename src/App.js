import React, { useState } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation'
import Progress from './components/Progress';
import Hub from './components/Hub';



function App() {
  const [hubName, setHubName] = useState('')

  const handleHubName = (hubName) => {
    setHubName(hubName)
  }
  return (
    <div className="App">
        {hubName}
        <Navigation />
        <Progress currentStep={1} />
        <Hub handleChange={handleHubName} />
        
          
    </div>
  );
}

export default App;
