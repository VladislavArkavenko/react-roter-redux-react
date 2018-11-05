import  { increment, decrement, addUser }  from '../actions'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
    componentWillMount() {
        if ( !this.props.counter[this.props.user] ) {
          this.props.addUser(this.props.user)
        }
    }

    render() {
        return (
            <div className="counter">
                <h1> Counter: { this.props.counter[ this.props.user ] } </h1>
                <button className="increment" onClick={ () => this.props.increment(this.props.user) }> + </button>
                <button className="decrement" onClick={ () => this.props.decrement(this.props.user) }> - </button>
            </div>
        )
    }
}

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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)
