export interface Prompt {
	int: (message: string) => number
	bool: (message: string) => boolean
}
