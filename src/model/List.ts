import { ModelKind } from './ModelKind'
import { QA } from './QA'

export interface ListSchema {
	readonly id: string
	readonly name: string
	readonly items: QA[]
}

export interface List extends ListSchema {
	readonly kind: ModelKind.List
}

export function makeList(o: ListSchema): List {
	return {
		kind: ModelKind.List,
		...o,
	}
}
