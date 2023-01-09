import { faker } from '@faker-js/faker'
import { Card, CardGenerator, Suit } from './Card'

export class FakerCardGenerator implements CardGenerator {
	private cards: Card[]

	constructor() {
		const values = [
			{ value: 1, display: 'Ace' },
			{ value: 2, display: '2' },
			{ value: 3, display: '3' },
			{ value: 4, display: '4' },
			{ value: 5, display: '5' },
			{ value: 6, display: '6' },
			{ value: 7, display: '7' },
			{ value: 8, display: '8' },
			{ value: 9, display: '9' },
			{ value: 0, display: '10' },
			{ value: 0, display: 'Jack' },
			{ value: 0, display: 'Queen' },
			{ value: 0, display: 'King' },
		]
		const suits = [Suit.Clubs, Suit.Diamonds, Suit.Hearts, Suit.Spades]
		this.cards = []
		for (const value of values) {
			for (const suit of suits) {
				this.cards.push({ suit, value: value.value, display: `${suit}-${value.display}` })
			}
		}
		faker.helpers.shuffle(this.cards)
	}

	public draw(): Card {
		return this.cards.shift() as Card
	}

	public length(): number {
		return this.cards.length
	}
}
