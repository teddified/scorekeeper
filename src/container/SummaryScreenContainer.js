import { connect } from 'react-redux'
import SummaryScreen from '../components/SummaryScreen'
import { saveRound, deleteAllPlayers } from '../actions'

const mapStateToProps = state => ({
  players: state.players,
})

const mapDispatchToProps = dispatch => ({
  saveRound: () => dispatch(saveRound()),
  deleteAllPlayers: () => dispatch(deleteAllPlayers()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SummaryScreen)
