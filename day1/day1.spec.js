const { getFuelRequired, getFuelWithFuelMass } = require('./day1.js')

it('works with single example', () => {
	expect(getFuelRequired([12])).toBe(2)
})

it('works with all examples', () => {
	expect(getFuelRequired([12, 14, 1969, 100756])).toBe(2 + 2 + 654 + 33583)
})

it('calculates the correct mass including fuel mass', () => {
	expect(getFuelWithFuelMass([14])).toBe(2)
	expect(getFuelWithFuelMass([1969])).toBe(966)
	expect(getFuelWithFuelMass([100756])).toBe(50346)
})
