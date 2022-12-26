import readlineSync from 'readline-sync'
import { Hand } from './Hand'
import { FakerCardGenerator } from './card/faker'

const bet: number = readlineSync.questionInt('Please put your bet\n')
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

	isPlay = readlineSync.keyInYNStrict('Wanna play more?\n')
	if (!isPlay) console.log(`You ${chips >= 0 ? 'got' : 'lost'} total ${Math.abs(chips)} chips`)
}
