// @flow
import reducer, { initialState } from './reducer'
import * as actions from './actions'

test('provide the initial state', () => {
	expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState)
})

const episodes = [
	{
		id: 1001,
		annictId: 1001,
		work: 3,
		number: '1',
		numberText: '1',
		sortNumber: 3,
		title: 'hoge hoge',
		records: [1, 2],
		recordsCount: 10,
		recordCommentsCount: 5,
		readedCount: 5,
	},
	{
		id: 1002,
		annictId: 1002,
		work: 4,
		number: '2',
		numberText: '2',
		sortNumber: 4,
		title: 'fuga',
		records: [3, 4],
		recordsCount: 11,
		recordCommentsCount: 6,
		readedCount: 5,
	},
]

test('handle RECEIVE_EPISODES', () => {
	expect(reducer(initialState, actions.receiveEpisodes(episodes))).toEqual([
		1001,
		1002,
	])
})

test("handle RECEIVE_EPISODES don't duplicate", () => {
	expect(
		reducer(initialState, actions.receiveEpisodes([...episodes, ...episodes])),
	).toEqual([1001, 1002])
})
