import connect from '../redux-moduls/counterConnect'
import React, { Component } from 'react'


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

export default connect(Counter)
