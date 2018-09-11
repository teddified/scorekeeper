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
        players: [
          ...state.players,
          { name: action.payload.name, roundscore: 0, score: [] },
        ],
      }
    case ACTIONS.UPDATE_SCORE:
      const { index, roundscore } = action.payload
      const players = state.players
      return {
        ...state,
        players: [
          ...players.slice(0, index),
          {
            name: players[index].name,
            score: players[index].score,
            roundscore: players[index].score + roundscore,
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
    case ACTIONS.SAVE_ROUND:
      console.log(state.players)
      return {
        players: state.players.map(player => ({
          ...player,
          score: [...player.score, state.players.roundscore],
          roundscore: 0,
        })),
      }
    default:
      return state
  }
}
