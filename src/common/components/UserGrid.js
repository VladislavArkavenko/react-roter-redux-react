import { requestUser } from '../redux-modules/usersModule'
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Counter from './Counter'

class UserGrid extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount () {
        this.fetchUser(this.props)
    }

    componentWillReceiveProps (nextProps) {
        this.fetchUser(nextProps)
    }

    fetchUser (props) {
        const name = props.match.params.name

        if ( !this.props.data[name] ) {
            this.props.requestUser(name)
        }
    }

    render() {
        const {error, user}  = this.props

        if (this.props.error) {
            return (
                <Fragment>
                    <h6> Ops! There is { error.status } error. </h6>
                    <p> { error.message } </p>
                </Fragment>
            )
        } else if (!user) {
            return(
                <Fragment>
                    <h2> Loading... </h2>
                    <p>  Please wait a few seconds </p>
                </Fragment>
            )
        } else {
            return (
                <div>
                    <img src={user.avatar_url} alt="Avatar"/>
                    <a href={user.url}>
                        <h5>{user.login}</h5>
                    </a>
                    <p>Followers: {user.followers}</p>
                    <p>Following: {user.following}</p>
                    < Counter user={user.login} />
                </div>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        error: state.users.error,
        user:  state.users.data[ownProps.match.params.name],
        data: state.users.data
    }
}

const mapDispatchToProps = { requestUser }

export default connect(mapStateToProps, mapDispatchToProps)(UserGrid)