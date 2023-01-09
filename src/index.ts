import { CompareResult, Hand } from './Hand'
import { FakerCardGenerator } from './card/faker'
import { ReadlinePrompt } from './prompt/readline'
import { Prompt } from './prompt/Prompt'

const getChipsSummaryString = (chips: number): string => {
	return `You ${chips >= 0 ? 'got' : 'lost'} total ${Math.abs(chips)} chips`
}

const play = (prompt: Prompt) => {
	let chips = 0

	// eslint-disable-next-line no-constant-condition
	while (true) {
		const bet: number = prompt.int('Please put your bet')
		const fakerCardGenerator = new FakerCardGenerator()
		const userCard = new Hand(fakerCardGenerator.draw(), fakerCardGenerator.draw())
		const dealerCard = new Hand(fakerCardGenerator.draw(), fakerCardGenerator.draw())

		console.log(`You got ${userCard.display()}`)
		if (prompt.bool('Do you want to draw?')) {
			userCard.addCard(fakerCardGenerator.draw())
			console.log(`You got ${userCard.display()}`)
		}

		if (dealerCard.calculateScore() < 5) {
			dealerCard.addCard(fakerCardGenerator.draw())
		}
		console.log(`The dealer got ${dealerCard.display()}`)

		switch (userCard.compare(dealerCard)) {
			case CompareResult.Win:
				console.log(`You won!!!, received ${bet} chips`)
				chips += bet
				break
			case CompareResult.Lose:
				console.log(`You lost, lost ${bet} chips`)
				chips -= bet
				break
			default:
				console.log('Draw, no chips changed')
				break
		}
		console.log(getChipsSummaryString(chips))
		if (!prompt.bool('Wanna play more?')) break
	}
}

play(new ReadlinePrompt())
