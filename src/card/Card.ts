export interface Card {
	suit: string
	value: number
	display: string
}

export interface CardGenerator {
	generate: () => Card
}
