import { FakerCardGenerator } from '../../src/card/faker'

describe('Faker Card Generator', () => {
	let generator: FakerCardGenerator
	beforeAll(() => {
		generator = new FakerCardGenerator()
	})

	it('should generate a card', () => {
		const card = generator.generate()
		expect(card).toHaveProperty('suit')
		expect(card).toHaveProperty('value')
		expect(card).toHaveProperty('display')
		expect(card.display).toMatch(
			/(Clubs|Diamonds|Hearts|Spades)-((Ace)|(2)|(3)|(4)|(5)|(6)|(7)|(8)|(9)|(10)|(Jack)|(Queen)|(King))/
		)
		expect(card.value).toBeGreaterThanOrEqual(1)
		expect(card.suit).toMatch(/(Clubs|Diamonds|Hearts|Spades)/)
	})
})
