import React, { useState } from 'react'
import Hub from '../hub/Hub'
import Rim from '../rim/Rim'
import Spoke from '../spoke/Spoke'
import Button from '../button/Button'
import { UPDATE_FORM, onInputChange, onFocusOut,  } from '../../utils/formValidate'


// function formReducer(state, action) {
//   switch (action.type) {
//   case UPDATE_FORM: {
//     // destruction from action.data
//     const { name, value, touched, hasError, error, isFormValid } = action.data
//     return {
//       ...state,
//       [name]: {
//         ...state[name],
//         value,
//         touched,
//         hasError,
//         error,
//       },
//       isFormValid,
//     }
//   }
//   default:
//     return state
//   }
// }


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

}


function Wheel() {
  let spokeLengthRight
  let spokeLengthLeft

  const [spokeLength, setSpokeLength] = useState([
    spokeLengthLeft,
    spokeLengthRight,
  ])
  const [wheelWeight, setWheelWeight] = useState(0)

  const [hubState, dispatch]= useReducer(formReducer, initialHubState)
  const [rimState, dispatch]= useReducer(formReducer, initialRimState)

  console.log('current hub state is ' + hubState)

  const handleChange =(e) => {
    onInputChange(e.target.name, e.target.value, dispatch, hubState)
  }

  const handleBlur =(e) => {
    console.log(e.target.name, e.target.value)
    onFocusOut(e.target.name, e.target.value, dispatch, hubState)
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
    },
  }

  //   const [hub, setHub] = useState(hubInitialValue)
  //   const [rim, setRim] = useState(rimInitialValue)
  const [spoke, setSpoke] = useState(spokeInitialValue)
  const [currentStep, setCurrentStep] = useState(1)

  const handleSpoke = (event) => {
    let { name, value } = event.target
    setSpoke((prev) => ({
      ...prev,
      [name]: value,
    }))
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
    let m = parseFloat(spoke.numberOfSpoke) / 2
    let kLeft = parseFloat(spoke.lacingPatternLeft)
    let kRight = parseFloat(spoke.lacingPatternRight)
    let radius1 = parseFloat(hubState.leftFlangeDiameter.value) / 2
    let radius2 = parseFloat(rimState.rimERD.value) / 2
    let radius3 = parseFloat(hubState.spokeHoleDiameter.value) / 2

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
    const wheelWeightUpdate =
			parseFloat(hubState.hubWeight) +
			parseFloat(rimState.rimWeight) +
			parseFloat(spoke.spokeWeight * spoke.numberOfSpokes)
    console.log(wheelWeightUpdate)
    setWheelWeight(wheelWeightUpdate)
  }


  return (
    <><form>
      <Progress currentStep={currentStep} />
      {currentStep === 1 && <Hub handleChange={handleChange} handleBlur={handleBlur} hub={hubState} />}
      {currentStep === 2 && <Rim handleChange={handleChange} handleBlur={handleBlur} rim={rimState}  />}
      {currentStep === 3 && <Spoke handleChange={handleSpoke} spoke={spoke} />}
      {currentStep === 4 && (
        <SpokeLength
          hubName={hub.hubName}
          rimName={rim.rimName}
          spokeName={spoke.spokeName}
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