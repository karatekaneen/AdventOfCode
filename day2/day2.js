exports.runGravityCalculation = values => {
	let output = [...values]
	let startPos = 0
	let shouldRun = true

	do {
		const [method, a, b, c] = output.slice(startPos, Math.max(startPos + 4))

		if (method === 1) {
			output[c] = output[a] + output[b]
			startPos += 4
		} else if (method === 2) {
			output[c] = output[a] * output[b]
			startPos += 4
		} else {
			shouldRun = false
			break
		}
	} while (shouldRun)
	return output
}

exports.processData = (valueString, replace = false, val1 = 12, val2 = 2) => {
	const output = valueString.split(',').map(v => parseInt(v))
	if (replace) {
		// Replace pos 1 with 12
		output[1] = val1
		// Replace pos 2 with 2
		output[2] = val2
	}
	const modifiedValues = this.runGravityCalculation(output)
	return modifiedValues[0]
}

exports.findNounAndVerb = (data, target) => {
	const nums = Array(100)
		.fill(0)
		.map((_, i) => i)

	for (const noun of nums) {
		for (const verb of nums) {
			if (this.processData(data, true, noun, verb) === target) return { noun, verb }
		}
	}
}
