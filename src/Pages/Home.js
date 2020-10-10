import React, { useState } from 'react';
import Progress from '../components/Progress';
import Hub from '../components/Hub';
import Rim from '../components/Rim';
import Spoke from '../components/Spoke';
import Button from '../components/Button';
import SpokeCalculator from '../components/utils/SpokeCalculator';
import SpokeLength from '../components/SpokeLength';

function Home() {
  let spokeLengthRight
  let spokeLengthLeft

  const [spokeLength, setSpokeLength] = useState([spokeLengthLeft, spokeLengthRight])
  const [wheelWeight, setWheelWeight] = useState(0) 

  const hubInitialValue = {
    hubName: '',
    hubWeight: '',
    spokeHoleDiameter: '',
    leftFlangeDiameter: '',
    rightFlangeDiameter: '',
    leftFlangeToCenter: '',
    rightFlangeToCenter: '',
    isHubError: {
      hubName: '',
      hubWeight: '',
      spokeHoleDiameter: '',
      leftFlangeDiameter: '',
      rightFlangeDiameter: '',
      leftFlangeToCenter: '',
      rightFlangeToCenter: '',
    },
  }

  const rimInitialValue = {
    rimName: '',
    rimWeight: '',
    rimERD: '',
    offsetSpokeBed: '',
    maxRimTension: '',
    isRimError: {
      rimName: '',
      rimWeight: '',
      rimERD: '',
      offsetSpokeBed: '',
      maxRimTension: '',
    }
  }

  const spokeInitialValue = {
    spokeName: '',
    spokeWeight: '',
    numberOfSpokes: '32',
    lacingPatternLeft: '0',
    lacingPatternRight: '3',
    isSpokeError: {
      spokeName: '',
      spokeWeight: '',
      numberOfSpokes: '',
      lacingPatternLeft: '',
      lacingPatternRight: '',
    }
  }

  const [hub, setHub] = useState(hubInitialValue)
  const [rim, setRim] = useState(rimInitialValue)
  const [spoke, setSpoke] = useState(spokeInitialValue)
  const [currentStep, setCurrentStep] = useState(1)

  const handleHub = (event) => {
    let {name, value} = event.target
    //adding conditions to validate the input
    
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

  const calculatorSpokeLength = () => {
    if (currentStep < 4){
      setCurrentStep( preV => preV += 1)
    }
    // calculate left side, if it is a rear hub,  this is of non-drive side
    // d, r1, r2, r3, m, k
    let centerToFlangeLeft = parseFloat(hub.leftFlangeToCenter)
    console.log(`centerToFlangeLeft is ${centerToFlangeLeft}`)
    // 39.22 * 39.22 = 1538.2084
    let centerToFlangeRight = parseFloat(hub.rightFlangeToCenter)
    console.log(`centerToFlangeRight is ${centerToFlangeRight}`)

    let m = parseFloat(spoke.numberOfSpokes) / 2
    console.log(`m is ${m}`)
    // 16 if it is of a 32-spoke wheel
    let kLeft = parseFloat(spoke.lacingPatternLeft)
    // 0 if lacing pattern is radial
    console.log(`kLeft is ${kLeft}` )
    let kRight = parseFloat(spoke.lacingPatternRight)
    // 3 if lacing pattern is 3-cross
    console.log(`kRight is ${kRight}`)
    let radius1 = parseFloat(hub.leftFlangeDiameter) / 2
    // 16 mm. 16 x 16 = 256
    console.log(`r1 is ${radius1}`)
    let radius2 = parseFloat(rim.rimERD) / 2
    // 294 * 294 =86436
    console.log(`r2 is ${radius2}`)
    let radius3 = parseFloat(hub.spokeHoleDiameter) / 2
    // 2.6 / 2 = 1.3
    console.log(`r3 is ${radius3}`)

    const spokeLengthLeftUpdate = SpokeCalculator(
      centerToFlangeLeft, 
      radius1, 
      radius2, 
      radius3, 
      m, 
      kLeft
    )

    // Calculate right side
    const spokeLengthRightUpdate = SpokeCalculator(
      centerToFlangeRight, 
      radius1, 
      radius2, 
      radius3, 
      m, 
      kRight
    )
  setSpokeLength([spokeLengthLeftUpdate, spokeLengthRightUpdate])
  }

  const calculatorWheelWeight = () => {
    const wheelWeightUpdate = parseFloat( hub.hubWeight ) + parseFloat(rim.rimWeight) + parseFloat( spoke.spokeWeight * spoke.numberOfSpokes);
    console.log(wheelWeightUpdate);
    setWheelWeight(wheelWeightUpdate)
  }

  return (
    <>
      <Progress currentStep={currentStep} />
      { currentStep === 1 && <Hub handleChange={handleHub} hub={hub}/> }
      { currentStep === 2 && <Rim handleChange={handleRim} rim={rim}/> }
      { currentStep === 3 && <Spoke handleChange={handleSpoke} spoke={spoke}/> }
      { currentStep === 4 && <SpokeLength hubName={hub.hubName} rimName={rim.rimName} spokeName={spoke.spokeName} spokeLength={spokeLength} wheelWeight={wheelWeight} /> }
      <div>
        { currentStep > 1 && <Button 
          classNames={"btn btn-lg btn-primary btn-block"} 
          title={'Prev'} 
          handleClick={handleButtonPrev} 
          />
        }
        { currentStep < 3 && <Button 
          classNames={"btn-info btn btn-lg btn-block" } 
          title={'Next'} 
          handleClick={handleButtonNext} 
          /> 
        }
        { currentStep === 3 && <Button classNames={"btn btn-lg btn-success btn-block"} title={'Calculate'} handleClick={() => {calculatorSpokeLength(); calculatorWheelWeight()}}/>}
      </div>
    </>
  );
}

export default Home;
