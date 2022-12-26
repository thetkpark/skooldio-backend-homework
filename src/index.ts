import { Hand } from './Hand'
import { FakerCardGenerator } from './card/faker'
import { ReadlinePrompt } from './prompt/readline'
import { Prompt } from './prompt/Prompt'

const getChipsSummaryString = (chips: number): string => {
	return `You ${chips >= 0 ? 'got' : 'lost'} total ${Math.abs(chips)} chips`
}

const play = (prompt: Prompt) => {
	const bet: number = prompt.int('Please put your bet')
	let chips = 0,
		isPlay = true

	while (isPlay) {
		const fakerCardGenerator = new FakerCardGenerator()
		const userCard = new Hand(fakerCardGenerator.generate(), fakerCardGenerator.generate())
		const dealerCard = new Hand(fakerCardGenerator.generate(), fakerCardGenerator.generate())

		console.log(`You got ${userCard.display()}`)
		console.log(`The dealer got ${dealerCard.display()}`)

		if (userCard.isHigherThan(dealerCard)) {
			console.log(`You won!!!, received ${bet} chips`)
			chips += bet
		} else {
			console.log(`You lost, lost ${bet} chips`)
			chips -= bet
		}

		isPlay = prompt.bool('Wanna play more?')
		if (!isPlay) console.log(getChipsSummaryString(chips))
	}
}

play(new ReadlinePrompt())
