import { Action } from './Action'
import { ActionType } from './ActionType'

export interface ActionNextWordSchema { }

export interface ActionNextWord extends ActionNextWordSchema, Action {
	readonly type: ActionType.NextWord
}

export function makeActionNextWord(o: ActionNextWordSchema): ActionNextWord {
	return {
		type: ActionType.NextWord,
		...o,
	}
}
