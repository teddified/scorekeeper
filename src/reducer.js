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
    case ACTIONS.DELETE_PLAYER:
      return {
        ...state,
        players: [
          ...state.players.slice(0, action.payload.index),
          ...state.players.slice(action.payload.index + 1),
        ],
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
      return {
        players: [
          ...state.players.slice(0, action.payload.index),
          {
            ...state.players[action.payload.index],
            roundscore:
              state.players[action.payload.index].roundscore +
              action.payload.value,
          },
          ...state.players.slice(action.payload.index + 1),
        ],
      }
    case ACTIONS.RESET_SCORE:
      return {
        players: state.players.map(player => ({
          ...player,
          roundscore: 0,
        })),
      }
    case ACTIONS.SAVE_ROUND:
      return {
        ...state,
        players: state.players.map(player => {
          return {
            ...player,
            score: [player.roundscore, ...player.score],
            roundscore: 0,
          }
        }),
      }
    default:
      return state
  }
}
