// d, r1, r2, r3, m, k
// variation need to attention, OSB, Spoke type J-bend or Straight-pulll
// d = distance from the center of hub (along the axis) to flange, for instance of a rear hub, cTLF and cTLR are different   
// r1 = the radius of circle of flange holes, equals to PCD/2 
// r2 = half of Effective Rim Diameter (ERD), or the diameter the ends of the spokes make in a built wheel of the rim
// r3 = radius of spoke holes in the flange, for example 2.6 mm,
// m = number of spokes to be used for the wheel, equals the "spokeNumber" 
// k = number of crossings per spoke, lacing pattern, radial, 1 crossing, 2 crossing, 3 crossing


const spokeCalculator=(d, r1, r2, r3, m, k) => {
  
  const angleCalculator = (crossing, spokeNumber)=> {
    //  for example of 3-crossing of 1 32-spoke  360° * 3 / (32 / 2) 
        const angle = 360  * crossing / spokeNumber
        return angle
  }

  // https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
  const roundNumberToTowDecimal = (num) => {
      return Math.round((num + Number.EPSILON) * 100) / 100
  }

  const angle = angleCalculator(k, m)
  console.log(angle);
  let spokeLength = Math.sqrt(Math.pow(d, 2) + Math.pow(r1, 2) + Math.pow(r2, 2) - 2 * r1 * r2 * Math.cos(angle)) - (r3)
  
  spokeLength = roundNumberToTowDecimal(spokeLength)
  
  return spokeLength;
}


export default spokeCalculator;