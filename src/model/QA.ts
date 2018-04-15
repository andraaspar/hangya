import { ModelKind } from './ModelKind'

export interface QASchema {
	readonly id: string
	readonly q: string
	readonly a: string
	readonly attemptCount: number
}

export interface QA extends QASchema {
	readonly kind: ModelKind.QA
}

export function makeQA(o: QASchema): QA {
	return {
		kind: ModelKind.QA,
		...o,
	}
}
