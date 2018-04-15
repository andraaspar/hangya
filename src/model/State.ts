import { ActionType } from './ActionType'
import { List } from './List'
import { TAction } from './TAction'

export interface State {
	readonly lists: List[] | undefined
	readonly listId: string | undefined
	readonly wordIds: string[] | undefined
}

export function createState(): State {
	return {
		lists: undefined,
		listId: undefined,
		wordIds: undefined,
	}
}

export function rootReducer(state: State, action: TAction): State {
	switch (action.type) {
		case ActionType.NextWord:
			return {
				...state,
			}
	}
	return state
}
