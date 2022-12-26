import { Hand } from '../src/Hand'
import { Card, Suit } from '../src/card/Card'

describe('Hand', () => {
	const customMockCard = (value: number, suit: Suit): Card => ({ display: `${suit}-${value}`, value, suit })

	describe('score calculation', () => {
		it('should calcualte the score when the sum less then 10', () => {
			const hand = new Hand(customMockCard(2, Suit.Clubs), customMockCard(0, Suit.Hearts))
			expect(hand.score).toEqual(2)
		})

		it('should calcualte the score when the sum more then 10', () => {
			const hand = new Hand(customMockCard(9, Suit.Clubs), customMockCard(5, Suit.Hearts))
			expect(hand.score).toEqual(4)
		})
	})

	it('should compare with another hand', () => {
		const hand = new Hand(customMockCard(4, Suit.Clubs), customMockCard(5, Suit.Hearts))
		const otherHand = new Hand(customMockCard(5, Suit.Diamonds), customMockCard(9, Suit.Diamonds))
		expect(hand.isHigherThan(otherHand)).toBeTruthy()
	})

	it('should display the cards', () => {
		const hand = new Hand(customMockCard(4, Suit.Clubs), customMockCard(5, Suit.Hearts))
		expect(hand.display()).toEqual('Clubs-4, Hearts-5')
	})
})
