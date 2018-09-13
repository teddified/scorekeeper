import { createAction } from 'redux-actions'

const ACTIONS = {
  DELETE_ALL_PLAYERS: 'DELETE_ALL_PLAYERS',
  ADD_PLAYER: 'ADD_PLAYER',
  UPDATE_SCORE: 'UPDATE_SCORE',
  RESET_SCORE: 'RESET_SCORE',
  DELETE_PLAYER: 'DELETE_PLAYER',
  SAVE_ROUND: 'SAVE_ROUND',
  BACK_TO_START: 'BACK_TO_START',
  ADD_GAMENAME: 'ADD_GAMENAME',
}

export const addPlayer = createAction(ACTIONS.ADD_PLAYER)

export const deletePlayer = createAction(ACTIONS.DELETE_PLAYER)
export const deleteAllPlayers = createAction(ACTIONS.DELETE_ALL_PLAYERS)
export const updateScore = createAction(ACTIONS.UPDATE_SCORE)
export const resetScore = createAction(ACTIONS.RESET_SCORE)
export const saveRound = createAction(ACTIONS.SAVE_ROUND)
export const addGameName = createAction(ACTIONS.ADD_GAMENAME)

export default ACTIONS
