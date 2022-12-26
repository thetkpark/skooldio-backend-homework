export enum Suit {
	Spades = 'Spades',
	Hearts = 'Hearts',
	Diamonds = 'Diamonds',
	Clubs = 'Clubs',
}

export interface Card {
	suit: Suit
	value: number
	display: string
}

export interface CardGenerator {
	generate: () => Card
}
