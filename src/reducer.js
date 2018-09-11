import { load } from './services'
import ACTIONS from './actions'

const initialState = {
  players: load('players') || [],
}

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case ACTIONS.DELETE_ALL_PLAYERS:
      return {
        ...state,
        players: [],
      }
    case ACTIONS.ADD_PLAYER:
      return {
        ...state,
        players: [{ name: action.payload.name, roundscore: 0, score: [] }],
      }
    case ACTIONS.UPDATE_SCORE:
      const players = state.players
      const { index, roundscore } = action.payload
      return {
        ...state,
        players: [
          ...players.slice(0, index),
          {
            name: 'jerry',
            score: 0,
            roundscore: players[0].score + roundscore,
          },
          ...players.slice(index + 1),
        ],
      }
    case ACTIONS.RESET_SCORE:
      return {
        players: state.players.map(player => ({
          ...player,
          score: player.score,
          roundscore: 0,
        })),
      }
    // } else if (action.type === 'SAVE_ROUND') {
    //   return {
    //     players: this.state.players.map(player => ({
    //       ...player,
    //       score: [action.payload.roundscore, ...player.score],
    //       roundscore: 0,
    //     })),
    //   }
  }
  return state
}
