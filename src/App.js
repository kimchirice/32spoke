import React, { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Progress from './components/Progress'
import Hub from './components/Hub'
import Rim from './components/Rim'
import Spoke from './components/Spoke'
import Button from './components/Button'


function App() {
  const partsInitialValue = {
    hubName: '',
    hubWeight: '',
    spokeHoleDiameter: '',
    leftFlangeDiameter: '',
    rightFlangeDiameter: '',
    leftFlangeToCenter: '',
    rightFlangeToCenter: '',
    rimName: '',
    rimWeight: '',
    rimERD: '',
    offsetSpokeBed: '',
    maxrimTension: '',
    spokeName: '',
    spokeWeight: '',
  }
  const [parts, setParts] = useState(partsInitialValue)

  const [currentStep, setCurrentStep] = useState(1)


  const handleParts = (event) => {
    let {name, value} = event.target
    setParts(prev => (
      {
        ...prev,
        [name]: value,
      })
    )
      
    
    console.log(`the name is ${name}`)
  }


  const handleButtonNext = (e) => {
    e.preventDefault()
    if (currentStep < 4){
      setCurrentStep( preV => preV += 1)
    }
  }

  const handleButtonPrev = (e) => {
    e.preventDefault()
    if (currentStep > 1){
      setCurrentStep( preV => preV -= 1)
    } 
    
  }

  return (
    <div className="App">
      <Navigation />
      <Progress currentStep={currentStep} />
      { currentStep === 1 && <Hub handleChange={handleParts} parts={parts}/> }
      { currentStep === 2 && <Rim handleChange={handleParts} parts={parts}/> }
      { currentStep === 3 && <Spoke handleChange={handleParts} parts={parts}/> }
      { currentStep > 1 && <Button title={'Prev'} className="btn btn-primary" handleClick={handleButtonPrev} />}
      { currentStep < 4 && <Button title={"Next"} className="btn btn-warning" handleClick={handleButtonNext} /> }
    </div>
  );
}

export default App;
