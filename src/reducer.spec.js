import reducer from './reducer'
import ACTIONS from './actions'

describe('reducer', () => {
  it('always returns a state', () => {
    const state = {
      players: [{ foo: 'bar' }],
    }

    const action = { type: "i don't really exist" }

    expect(reducer(state, { type: 'foo' })).toBe(state)
    expect(reducer(state, {})).toBe(state)
    expect(reducer(state)).toBe(state)
  })

  describe(ACTIONS.ADD_PLAYER, () => {
    it('creates a player with a name', () => {
      const state = {
        players: [],
      }
      const action = { type: ACTIONS.ADD_PLAYER, payload: { name: 'Foobar' } }

      expect(reducer(state, action)).toEqual({
        players: [{ name: 'Foobar', roundscore: 0, score: [] }],
      })
    })
  })

  describe(ACTIONS.DELETE_ALL_PLAYERS, () => {
    it('makes the players an empty array', () => {
      const state = {
        players: [{ foo: 'bar' }, { baz: 'foobar' }],
      }

      const action = { type: ACTIONS.DELETE_ALL_PLAYERS }

      expect(reducer(state, action)).toEqual({ players: [] })
    })
  })

  describe(ACTIONS.UPDATE_SCORE, () => {
    it('add roundscore to totalscore', () => {
      const state = {
        players: [{ name: 'jerry', score: [0], roundscore: 0 }],
      }

      const action = {
        type: ACTIONS.UPDATE_SCORE,
        payload: { roundscore: 24, index: 0 },
      }

      expect(reducer(state, action)).toEqual({
        players: [{ name: 'jerry', score: [0], roundscore: 24 }],
      })
    })
  })
  describe(ACTIONS.RESET_SCORE, () => {
    it('put score in players to 0', () => {
      const state = {
        players: [{ name: 'tom', score: [10], roundscore: 12 }],
      }

      const action = { type: ACTIONS.RESET_SCORE }

      expect(reducer(state, action)).toEqual({
        players: [{ name: 'tom', score: [10], roundscore: 0 }],
      })
    })
  })
  describe(ACTIONS.SAVE_ROUND, () => {
    it('add roundscore to score and delete roundscore', () => {
      const state = {
        players: [{ name: 'tom', score: [], roundscore: 10 }],
      }

      const action = { type: ACTIONS.SAVE_ROUND }

      expect(reducer(state, action)).toEqual({
        players: [{ name: 'tom', score: [10], roundscore: 0 }],
      })
    })
  })
})
