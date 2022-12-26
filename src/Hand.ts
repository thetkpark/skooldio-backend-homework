import { Card, CardGenerator } from './card/Card'

export class Hand {
	private cards: Card[]
	private score: number

	constructor(cardGenerator: CardGenerator) {
		this.cards = [cardGenerator.generate(), cardGenerator.generate()]
		this.score = this.calculateScore()
	}

	private calculateScore(): number {
		return this.cards.reduce((acc, card) => acc + card.value, 0) % 10
	}

	public display(): string {
		return this.cards.map(card => card.display).join(', ')
	}

	public isHigherThan(hand: Hand): boolean {
		return this.score > hand.score
	}
}
