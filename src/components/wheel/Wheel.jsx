import React, { useState } from 'react'
import Hub from '../hub/Hub'
import Rim from '../rim/Rim'
import Spoke from '../spoke/Spoke'
import SpokeLength from '../spoke_length/SpokeLength'
import Button from '../button/Button'
import { validateInput, checkIsFormValid  } from '../../utils/formValidate'
import spokeCalculator from '../../utils/spokeCalculator'
import Progress from '../progress/Progress'

/**
 *  set the intial state of Hub
 * */
const initialHubState = {
  hubName: { value: '', touched: false, hasError: true, error: '' },
  hubWeight: { value: '', touched: false, hasError: true, error: '' },
  spokeHoleDiameter: { value: '', touched: false, hasError: true, error: '' },
  leftFlangeDiameter: {
    value: '',
    touched: false,
    hasError: true,
    error: '',
  },
  rightFlangeDiameter: {
    value: '',
    touched: false,
    hasError: true,
    error: '',
  },
  leftFlangeToCenter: {
    value: '',
    touched: false,
    hasError: true,
    error: '',
  },
  rightFlangeToCenter: {
    value: '',
    touched: false,
    hasError: true,
    error: '',
  },
  isFormValid: false,
}

/**
 * set initial state of Rim
 */
const initialRimState = {
  rimName: { value: '',
    touched: false,
    hasError: true,
    error: '' },
  rimWeight: { value: '',
    touched: false,
    hasError: true,
    error: '' },
  rimERD: { value: '',
    touched: false,
    hasError: true,
    error: '' },
  offsetSpokeBed: {
    value: '',
    touched: false,
    hasError: true,
    error: ''
  },
  maxRimTension: {
    value: '',
    touched: false,
    hasError: true,
    error: ''
  },
  isFormValid: false,
}

/**
 *  spokeName,
    spokeWeight,
    numberOfSpokes: '32',
    lacingPatternLeft: '0',
    lacingPatternRight: '3',
 *
 */
const initialSpokeState = {
  spokeName: { value: '',
    touched: false,
    hasError: true,
    error: '' },
  spokeWeight: { value: '',
    touched: false,
    hasError: true,
    error: '' },
  numberOfSpokes: { value: '32',
    touched: false,
    hasError: true,
    error: '' },
  lacingPatternLeft: { value: '0',
    touched: false,
    hasError: true,
    error: '' },
  lacingPatternRight: { value: '3',
    touched: false,
    hasError: true,
    error: '' },
  isFormValid: false,
}


const Wheel = () => {
  let spokeLengthRight
  let spokeLengthLeft

  const [spokeLength, setSpokeLength] = useState([
    spokeLengthLeft,
    spokeLengthRight,
  ])
  const [wheelWeight, setWheelWeight] = useState(0)

  const [hubState, setHubState]= useState(initialHubState)
  const [rimState, setRimState]= useState(initialRimState)
  const [spokeState, setSpokeState] = useState(initialSpokeState)
  const [currentStep, setCurrentStep] = useState(1)

  console.log('current hubState is ' + hubState)

  const handleHubChange =(e) => {
    const { name, value } = e.target
    console.table({ name, value })

    const { hasError, error } = validateInput(name, value)
    console.log(`hasError is ${hasError}`)
    console.log(`error is ${error}`)

    const isFormValid = checkIsFormValid(name, value, hasError, error, hubState)

    setHubState((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value,
        hasError,
        error,
        touched: false,
      },
      isFormValid,
    }))
  }

  const handleRimChange =(e) => {
    const { name, value } = e.target
    console.table({ name, value })

    const { hasError, error } = validateInput(name, value)
    console.log(`hasError is ${hasError}`)
    console.log(`error is ${error}`)

    const isFormValid = checkIsFormValid(name, value, hasError, error, rimState)

    setRimState((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value,
        hasError,
        error,
        touched: false,
      },
      isFormValid,
    }))
  }
  const handleSpokeChange =(e) => {
    const { name, value } = e.target
    console.table({ name, value })

    const { hasError, error } = validateInput(name, value)
    console.log(`hasError is ${hasError}`)
    console.log(`error is ${error}`)

    const isFormValid = checkIsFormValid(name, value, hasError, error, spokeState)

    setSpokeState((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value,
        hasError,
        error,
        touched: false,
      },
      isFormValid,
    }))
  }
  const handleBlur =(e) => {
    console.log(e.target.name, e.target.value)
  }


  const handleButtonNext = (e) => {
    e.preventDefault()
    if (currentStep < 4) {
      setCurrentStep((preV) => (preV += 1))
    }
  }

  const handleButtonPrev = (e) => {
    e.preventDefault()
    if (currentStep > 1) {
      setCurrentStep((preV) => (preV -= 1))
    }
  }

  const calculatorSpokeLength = () => {
    if (currentStep < 4) {
      setCurrentStep((preV) => (preV += 1))
    }
    // calculate left side
    // d, r1, r2, r3, m, k
    let centerToFlangeLeft = parseFloat(hubState.leftFlangeToCenter.value)
    let centerToFlangeRight = parseFloat(hubState.rightFlangeToCenter.value)
    let m = parseFloat(spokeState.numberOfSpokes.value) / 2
    let kLeft = parseFloat(spokeState.lacingPatternLeft.value)
    let kRight = parseFloat(spokeState.lacingPatternRight.value)
    let radius1 = parseFloat(hubState.leftFlangeDiameter.value) / 2
    let radius2 = parseFloat(rimState.rimERD.value) / 2
    let radius3 = parseFloat(hubState.spokeHoleDiameter.value) / 2

    const spokeLengthLeftUpdate = spokeCalculator(
      centerToFlangeLeft,
      radius1,
      radius2,
      radius3,
      m,
      kLeft
    )

    // Calculate right side
    const spokeLengthRightUpdate = spokeCalculator(
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
    const wheelWeightUpdate =
			parseFloat(hubState.hubWeight.value) +
			parseFloat(rimState.rimWeight.value) +
			parseFloat(spokeState.spokeWeight.value * spokeState.numberOfSpokes.value)
    console.log(wheelWeightUpdate)
    setWheelWeight(wheelWeightUpdate)
  }


  return (
    <><form>
      <Progress currentStep={currentStep} />
      {currentStep === 1 && <Hub handleChange={handleHubChange} hub={hubState} />}
      {currentStep === 2 && <Rim handleChange={handleRimChange} handleBlur={handleBlur} rim={rimState} />}
      {currentStep === 3 && <Spoke handleChange={handleSpokeChange} spoke={spokeState} />}
      {currentStep === 4 && (
        <SpokeLength
          hubName={hubState.hubName.value}
          rimName={rimState.rimName.value}
          spokeName={spokeState.spokeName.value}
          spokeLength={spokeLength}
          wheelWeight={wheelWeight}
        />
      )}
      <div>
        {currentStep > 1 && (
          <Button
            classNames={'btn btn-lg btn-primary btn-block'}
            title={'Prev'}
            handleClick={handleButtonPrev}
          />
        )}
        {currentStep < 3 && (
          <Button
            classNames={'btn-info btn btn-lg btn-block'}
            title={'Next'}
            handleClick={handleButtonNext}
          />
        )}
        {currentStep === 3 && (
          <Button
            classNames={'btn btn-lg btn-success btn-block'}
            title={'Calculate'}
            handleClick={() => {
              calculatorSpokeLength(), calculatorWheelWeight()
            }}
          />
        )}
      </div>
    </form>
    </>
  )
}

export default Wheel