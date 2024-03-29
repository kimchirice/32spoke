import React, { useState } from 'react'
import Progress from '../components/progress/Progress'
import Hub from '../components/hub/Hub'
import Rim from '../components/rim/Rim'
import Spoke from '../components/spoke/Spoke'
import Button from '../components/button/Button'
import SpokeCalculator from '../utils/spokeCalculator'
import SpokeLength from '../components/spoke_length/SpokeLength'

function Home() {
    let spokeLengthRight
    let spokeLengthLeft

    const [spokeLength, setSpokeLength] = useState([
        spokeLengthLeft,
        spokeLengthRight,
    ])
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
        },
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

    const [hub, setHub] = useState(hubInitialValue)
    const [rim, setRim] = useState(rimInitialValue)
    const [spoke, setSpoke] = useState(spokeInitialValue)
    const [currentStep, setCurrentStep] = useState(1)

    const handleHub = (event) => {
        const { name, value } = event.target
        //adding conditions to validate the input

        setHub((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleRim = (event) => {
        const { name, value } = event.target
        setRim((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSpoke = (event) => {
        const { name, value } = event.target
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
        const spokeLengthLeftUpdate = SpokeCalculator(
            hub.leftFlangeToCenter,
            hub.leftFlangeDiameter,
            rim.rimERD,
            hub.spokeHoleDiameter,
            spoke.numberOfSpokes,
            spoke.lacingPatternLeft
        )

        // Calculate right side
        const spokeLengthRightUpdate = SpokeCalculator(
            hub.rightFlangeToCenter,
            hub.rightFlangeDiameter,
            rim.rimERD,
            hub.spokeHoleDiameter,
            spoke.numberOfSpokes,
            spoke.lacingPatternRight
        )
        setSpokeLength([spokeLengthLeftUpdate, spokeLengthRightUpdate])
    }

    const calculatorWheelWeight = () => {
        const wheelWeightUpdate =
            parseFloat(hub.hubWeight) +
            parseFloat(rim.rimWeight) +
            parseFloat(spoke.spokeWeight * spoke.numberOfSpokes)
        console.log(wheelWeightUpdate)
        setWheelWeight(wheelWeightUpdate)
    }

    return (
        <>
            <Progress currentStep={currentStep} />
            {currentStep === 1 && <Hub handleChange={handleHub} hub={hub} />}
            {currentStep === 2 && <Rim handleChange={handleRim} rim={rim} />}
            {currentStep === 3 && (
                <Spoke handleChange={handleSpoke} spoke={spoke} />
            )}
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
        </>
    )
}

export default Home
