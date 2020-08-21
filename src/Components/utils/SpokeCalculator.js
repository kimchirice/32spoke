// d, r1, r2, r3, m, k
//   viaration need to attention, OSB, Spoke type J-bend or Straight-pulll
//   d = distance from the center of hub (along the axis) to flange, for instance of a rear hub, cTLF and cTLR
    
//   r1 = the radius of circle of flange holes, equals to PCD/2 
//   r2 = half of effective Rim Diameter (ERD), or the diameter the ends of the spokes make in a built wheel of the rim
//   r3 = radius of spoke holes in the flange, for example 2.6 mm,
//   m = number of spokes to be used for one side of the wheel, equals to half of the "spokeNumber"
//   k = number of crossings per spoke,  
//    a function here to calculate angle, based on number of spokes and lacing patern(s) 
const spokeCalculator=(d, r1, r2, r3, m, k) => {

  const angleCalculator = (k, m)=> {
    // angle = 360° * k* 2 /m,  for example of  360°*3 /16 = 60°.
        const angle = 360 * k  / m
        return angle
  }

  // https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
  const roundNumberToTowDecimal = (num) => {
      return Math.round((num + Number.EPSILON) * 100) / 100
  }

  const angle = angleCalculator(k, m)    
  let spokeLength = Math.sqrt(d*d + r1*r1/4 + r2*r2/4 - r1*r2*Math.cos(angle)/2) - (r3/2)
  spokeLength = roundNumberToTowDecimal(spokeLength)
  return spokeLength;
}


export default spokeCalculator;