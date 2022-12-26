import { faker } from '@faker-js/faker'
import { Card, CardGenerator } from './Card'

export class FakerCardGenerator implements CardGenerator {
	public generate(): Card {
		const { value, display: valueString } = faker.helpers.arrayElement([
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
		])
		const suit = faker.helpers.arrayElement(['Clubs', 'Diamonds', 'Hearts', 'Spades'])
		return { suit, value, display: `${suit}-${valueString}` }
	}
}
