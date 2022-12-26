import { Card } from './card/Card'

export enum CompareResult {
	Win,
	Lose,
	Draw,
}

export class Hand {
	public readonly cards: Card[]
	public readonly score: number

	constructor(card1: Card, card2: Card) {
		this.cards = [card1, card2]
		this.score = this.calculateScore()
	}

	private calculateScore(): number {
		return this.cards.reduce((acc, card) => acc + card.value, 0) % 10
	}

	public display(): string {
		return this.cards.map(card => card.display).join(', ')
	}

	public compare(hand: Hand): CompareResult {
		if (this.score > hand.score) return CompareResult.Win
		if (this.score < hand.score) return CompareResult.Lose
		return CompareResult.Draw
	}
}
