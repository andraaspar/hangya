import { ActionType } from './ActionType'

export interface ActionSchema {
	readonly type: ActionType
}

export interface Action extends ActionSchema {}

export function makeAction(o: ActionSchema): Action {
	return {
		...o,
	}
}
