const angleCalculator = (crossing, spokeNumber) => {
    const angle = (360 * crossing) / spokeNumber
    return angle
}

const roundNumberToTowDecimal = (num) => {
    return Math.round((num + Number.EPSILON) * 100) / 100
}

/**
 * function return suggested spoken length (unit mm.)
 * centerToFlange = distance from the center of hub (along the axis) to flange, for example 30 mm,
 *  flangeDiameter = spoke hole circle diameter of the hub, for example 39.0 mm,
 * rimERD = effective Rim Diameter (ERD), or the diameter the ends of the spokes make in a built wheel (see 'Discussion' attached to this article for explanation) of the rim, for example 301 mm,
 * spokeHoleDiameter = diameter of spoke holes in the flange, for example 2.2 mm,
 * numberOfSpokes = number of spokes to be used for one side of the wheel, for example 36/2=18,
 * crossings = number of crossings per spoke, for example 3 and
 * angle = 360° crossings/numberOfSpokes, for example 360°*3/18 = 60°.
 * @param centerToFlange
 * @param flangeDiameter
 * @param rimERD
 * @param spokeHoleDiameter
 * @param numberOfSpokes
 * @param crossings
 * @returns {*|number}
 */

const spokeCalculator = (
    centerToFlange,
    flangeDiameter,
    rimERD,
    spokeHoleDiameter,
    numberOfSpokes,
    crossings) => {

    centerToFlange = parseFloat(centerToFlange)
    numberOfSpokes = parseFloat(numberOfSpokes)
    crossings = parseFloat(crossings)
    flangeDiameter = parseFloat(flangeDiameter)
    rimERD = parseFloat(rimERD)
    spokeHoleDiameter = parseFloat(spokeHoleDiameter)

    const angle = angleCalculator(crossings, numberOfSpokes)

    let spokeLength =
        Math.sqrt(centerToFlange * centerToFlange + (0.25 * flangeDiameter * flangeDiameter) + 0.25 * rimERD * rimERD  - 0.5 * flangeDiameter * rimERD * Math.cos(angle)) -
        ( spokeHoleDiameter * 0.5 )

    spokeLength = roundNumberToTowDecimal(spokeLength)

    return spokeLength
}

export default spokeCalculator
