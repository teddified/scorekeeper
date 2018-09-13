import { connect } from 'react-redux'
import { addGameName } from '../actions'
import GameInput from '../components/GameInput'

const mapDispatchToProps = dispatch => ({
  onSubmit: newGame => dispatch(addGameName({ newGame })),
})

const wrappingFunction = connect(
  null,
  mapDispatchToProps
)

export default wrappingFunction(GameInput)
