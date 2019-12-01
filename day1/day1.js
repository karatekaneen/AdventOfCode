exports.getFuelRequired = modules => modules.reduce((sum, mass) => sum + massCalculation(mass), 0)

exports.getFuelWithFuelMass = modules =>
	modules.reduce((sum, mass) => {
		let massFraction = massCalculation(mass)
		sum += massFraction
		do {
			massFraction = Math.max(massCalculation(massFraction), 0)
			sum += massFraction
		} while (massFraction > 0)

		return sum
	}, 0)

const massCalculation = mass => Math.floor(mass / 3) - 2
