import React, { useState } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation'
import Progress from './components/Progress';
import Hub from './components/Hub';
import Rim from './components/Rim';
import Spoke from './components/Spoke';
import Button from './components/Button';


function App() {
  const [hubName, setHubName] = useState('')
  const [rimName, setRimName] = useState('')
  const [spokeName, setSpokeName] = useState('')
  const [currentStep, setCurrentStep] = useState(1)

  const handleHubName = (hubName) => {
    setHubName(hubName)
  }

  const handleRimName = (rimName) => {
    setRimName(rimName)
  }

  const handleSpokeName = (spokeName) =>{
    setSpokeName(spokeName)
  }

  const handleButtonNext = () => {
    if (currentStep < 4){
      setCurrentStep( preV => preV += 1)
    }
  }

  const handleButtonPrev = () => {
    if (currentStep > 1){
      setCurrentStep( preV => preV -= 1)
    } 
    
  }

  return (
    <div className="App">
        {hubName}
        <br/>
        {rimName}
        <br/>
        {spokeName}
        <Navigation />
        <Progress currentStep={currentStep} />
    { currentStep === 1 &&
        <Hub handleChange={handleHubName} /> }
    { currentStep === 2 && 
      <Rim handleChange={handleRimName} />   
    }    
         
    {currentStep === 3 &&  
        <Spoke handleChange={handleSpokeName}/> }

        { currentStep > 1 && <Button title={'Prev'} className="btn btn-primary" handleClick={handleButtonPrev} />}
    { currentStep < 4 && <Button title={"Next"} className="btn btn-warning" handleClick={handleButtonNext} /> }
    </div>
  );
}

export default App;
