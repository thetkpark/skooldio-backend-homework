import readlineSync from 'readline-sync'
import { Prompt } from './Prompt'

export class ReadlinePrompt implements Prompt {
	int(message: string): number {
		return readlineSync.questionInt(message + '\n')
	}

	bool(message: string): boolean {
		return readlineSync.keyInYNStrict(message + '\n')
	}
}
