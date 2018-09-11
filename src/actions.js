import { createAction } from 'redux-actions'

const ACTIONS = {
  DELETE_ALL_PLAYERS: 'DELETE_ALL_PLAYERS',
  ADD_PLAYER: 'ADD_PLAYER',
  UPDATE_SCORE: 'UPDATE_SCORE',
  RESET_SCORE: 'RESET_SCORE',
  DELETE_PLAYER: 'DELETE_PLAYER',
  SAVE_ROUND: 'SAVE_ROUND',
}

export const addPlayer = createAction(ACTIONS.ADD_PLAYER)

export const deletePlayer = createAction(ACTIONS.DELETE_PLAYER)

export default ACTIONS
