[![GitHub issues](https://img.shields.io/github/issues/kimchirice/32spoke-v2)](https://github.com/kimchirice/32spoke-v2/issues)
[![GitHub license](https://img.shields.io/github/license/kimchirice/32spoke-v2)](https://github.com/kimchirice/32spoke-v2)
[![GitHub forks](https://img.shields.io/github/forks/kimchirice/32spoke-v2)](https://github.com/kimchirice/32spoke-v2/forks)
[![GitHub stars](https://img.shields.io/github/stars/kimchirice/32spoke-v2)](https://img.shields.io/github/stars/kimchirice/32spoke-v2/stars)


## 32spoke

The idea was to build a tool to help me re-build my long-hauled front wheel. Then it became a webapp helps everyone whose wants to build a wheelset by herself/himself.

I hope this help you calculate spoke length for the next build

## live one [32spoke](https://32spoke.netlify.app/)

## wheel variables

1.  Hub

- Hub name
- Hub weight
- Left flange diameter
- Right flange diameter
- Left flange to center
- Right flange to center
- Spoke hole diameter

2.  Rim

- Rim name
- Rim weight
- Rim ERD
- Offset spoke bed(OSB)
- Max rim tension

3.  Lacing

- Spoke name
- Number of spokes
  - 16
  - 18
  - 20
  - 24
  - 28
  - 32
  - 36
- Lacing pattern
  - 1x
  - 2x
  - 3x

## Color

- Option 1

  ```
  /* SCSS RGB */
  $ruby-red: rgba(163, 22, 33, 1);
  $beau-blue: rgba(191, 219, 247, 1);
  $indigo-dye: rgba(5, 60, 94, 1);
  $metallic-seaweed: rgba(31, 122, 140, 1);
  $amaranth-red: rgba(219, 34, 42, 1);
  ```

- Option 2
  ```
  /* SCSS RGB */
  $eerie-black: rgba(24, 24, 24, 1);
  $silver: rgba(196, 196, 196, 1);
  $white: rgba(255, 255, 255, 1);
  $aureolin: rgba(247, 232, 19, 1);
  $madder-lake: rgba(208, 51, 58, 1);
  ```
## How the spoke length calculated

Note: only works for *J-bend* spokes at the moment. Not suit for *Straight-pulll* spokes

- d = distance from the center of hub (along the axis) to flange, for instance of a rear hub, cTLF and cTLR are different
- r1 = the radius of circle of flange holes, equals to PCD/2
- r2 = half of Effective Rim Diameter (ERD), or the diameter the ends of the spokes make in a built wheel of the rim
- r3 = radius of spoke holes in the flange, for example 2.6 mm,
- m = number of spokes to be used for one side of the wheel, equals to half of the "spokeNumber"
- k = number of crossings per spoke,



```JavaScript 
// spokeCalculator.js
const spokeCalculator = (d, r1, r2, r3, m, k) => {
	const angleCalculator = (crossing, spokeNumber) => {
		const angle = (360 * crossing) / spokeNumber
		return angle
	}

	const roundNumberToTowDecimal = (num) => {
		return Math.round((num + Number.EPSILON) * 100) / 100
	}

	const angle = angleCalculator(k, m)

	let spokeLength =
		Math.sqrt(d * d + r1 * r1 + r2 * r2 - 2 * r1 * r2 * Math.cos(angle)) - r3

	spokeLength = roundNumberToTowDecimal(spokeLength)

	return spokeLength
}

export default spokeCalculator
```


## Reference
- [Round to at the most 2 decimal places on if necessary](https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary)
