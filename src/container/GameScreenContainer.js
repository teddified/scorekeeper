import { connect } from 'react-redux'
import GameScreen from '../components/GameScreen'
import { updateScore, deletePlayer, resetScore, saveRound } from '../actions'

const mapStateToProps = state => ({
  players: state.players,
})

const mapDispatchToProps = dispatch => ({
  updateScore: (index, value) => dispatch(updateScore({ index, value })),
  deletePlayer: index => dispatch(deletePlayer({ index })),
  resetScore: () => dispatch(resetScore()),
  saveRound: () => dispatch(saveRound()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameScreen)
