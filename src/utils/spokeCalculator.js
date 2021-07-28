const angleCalculator = (crossing, spokeNumber) => {
    const angle = (360 * crossing) / spokeNumber
    return angle
}

const roundNumberToTowDecimal = (num) => {
    return Math.round((num + Number.EPSILON) * 100) / 100
}

const spokeCalculator = (d, r1, r2, r3, m, k) => {
    const angle = angleCalculator(k, m)

    let spokeLength =
        Math.sqrt(d * d + r1 * r1 + r2 * r2 - 2 * r1 * r2 * Math.cos(angle)) -
        r3

    spokeLength = roundNumberToTowDecimal(spokeLength)

    return spokeLength
}

export default spokeCalculator
