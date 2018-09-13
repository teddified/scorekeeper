import { connect } from 'react-redux'
import { addGameName } from '../actions'
import StartScreen from '../components/StartScreen'

const mapStateToProps = state => ({
  gamename: state.gamename,
})

const mapDispatchToProps = dispatch => ({
  addGameName: newName => dispatch(addGameName({ newName })),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartScreen)
