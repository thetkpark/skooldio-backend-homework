import { Card } from './card/Card'

export enum CompareResult {
	Win,
	Lose,
	Draw,
}

export class Hand {
	public readonly cards: Card[]

	constructor(card1: Card, card2: Card) {
		this.cards = [card1, card2]
	}

	public calculateScore(): number {
		return this.cards.reduce((acc, card) => acc + card.value, 0) % 10
	}

	public display(): string {
		return this.cards.map(card => card.display).join(', ')
	}

	public addCard(card: Card): void {
		this.cards.push(card)
	}

	public compare(hand: Hand): CompareResult {
		if (this.calculateScore() > hand.calculateScore()) return CompareResult.Win
		if (this.calculateScore() < hand.calculateScore()) return CompareResult.Lose
		return CompareResult.Draw
	}
}
