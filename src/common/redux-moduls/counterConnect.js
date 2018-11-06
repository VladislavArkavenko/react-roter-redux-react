import { addUser, decrement, increment } from './counterModule'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => {
    return {
        increment: user => {
            dispatch( increment(user) )
        },
        decrement: user => {
            dispatch( decrement(user) )
        },
        addUser: user => {
            dispatch( addUser(user) )
        }
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

export default connect( mapStateToProps, mapDispatchToProps )