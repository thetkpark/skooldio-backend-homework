import { FakerCardGenerator } from '../../src/card/faker'

describe('Faker Card Generator', () => {
	let generator: FakerCardGenerator
	beforeEach(() => {
		generator = new FakerCardGenerator()
	})

	it('should generate a card', () => {
		const card = generator.draw()
		expect(card).toHaveProperty('suit')
		expect(card).toHaveProperty('value')
		expect(card).toHaveProperty('display')
		expect(card.display).toMatch(
			/(Clubs|Diamonds|Hearts|Spades)-((Ace)|(2)|(3)|(4)|(5)|(6)|(7)|(8)|(9)|(10)|(Jack)|(Queen)|(King))/
		)
		expect(card.value).toBeGreaterThanOrEqual(0)
		expect(card.suit).toMatch(/(Clubs|Diamonds|Hearts|Spades)/)
	})

	it('should draw unique card', () => {
		const drawedCards: string[] = []
		while (generator.length() > 0) {
			const card = generator.draw()
			expect(drawedCards.findIndex(dis => dis === card.display)).toBe(-1)
			drawedCards.push(card.display)
		}
		expect(generator.length()).toBe(0)
		expect(drawedCards.length).toBe(52)
	})
})
