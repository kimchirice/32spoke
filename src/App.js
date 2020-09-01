import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Progress from './components/Progress';
import Hub from './components/Hub';
import Rim from './components/Rim';
import Spoke from './components/Spoke';
import Button from './components/Button';
import SpokeCalculator from './components/utils/SpokeCalculator';
import SpokeLength from './components/SpokeLength';


function App() {
  const hubInitialValue = {
    hubName: '',
    hubWeight: '',
    spokeHoleDiameter: '',
    leftFlangeDiameter: '',
    rightFlangeDiameter: '',
    leftFlangeToCenter: '',
    rightFlangeToCenter: '',
  }

  const rimInitialValue = {
    rimName: '',
    rimWeight: '',
    rimERD: '',
    offsetSpokeBed: '',
    maxrimTension: '',
  }

  const spokeInitialValue = {
    spokeName: '',
    spokeWeight: '',
  }

  const [hub, setHub] = useState(hubInitialValue)
  const [rim, setRim] = useState(rimInitialValue)
  const [spoke, setSpoke] = useState(spokeInitialValue)

  const [currentStep, setCurrentStep] = useState(1)

  const handleHub = (event) => {
    let {name, value} = event.target
    setHub(prev => 
      ({
        ...prev,
        [name]: value,
      })
    )
  }
  
  const handleRim = (event) => {
    let {name, value} = event.target
    setRim(prev => (
      {
        ...prev,
        [name]: value,
      })
    )
      
  }

  const handleSpoke = (event) => {
    let {name, value} = event.target
    setSpoke(prev => 
      ({
        ...prev,
        [name]: value,
      })
    )
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

  const calculatorSpokeLength = ({hub, rim, spoke}) => {
    // calculate left side
    // d, r1, r2, r3, m, k
    // 
    // const {leftFlangeToCenter, rimERD, spokeHoleDiameter, }
    
    // Calculate right side
  }

  const calculatorWheelWeight = () => {
    alert('Hooray')
  }

  return (
    <div className="App">
      <Navigation />
      <Progress currentStep={currentStep} />
      { currentStep === 1 && <Hub handleChange={handleHub} hub={hub}/> }
      { currentStep === 2 && <Rim handleChange={handleRim} rim={rim}/> }
      { currentStep === 3 && <Spoke handleChange={handleSpoke} spoke={spoke}/> }
      { currentStep === 4 && <SpokeLength length={'300'} /> }
      <div>
        { currentStep > 1 && <Button className="btn btn-primary" title={'Prev'} handleClick={handleButtonPrev} />}
        { currentStep < 4 && <Button className="btn btn-info" title={'Next'} handleClick={handleButtonNext} /> }
      </div>
      
    </div>
  );
}

export default App;
