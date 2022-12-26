import { CompareResult, Hand } from './Hand'
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

		isPlay = prompt.bool('Wanna play more?')
		if (!isPlay) console.log(getChipsSummaryString(chips))
	}
}

play(new ReadlinePrompt())
