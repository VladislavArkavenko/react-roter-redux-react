import React, { Component } from 'react'
import { fetchUser } from '../api'
import Counter from './Counter'


export default class UserGrid extends Component {
    constructor(props){
        super(props)

        let user

        if ( __isBrowser__ ) {
            user = window.__INITIAL_DATA__
            delete window.__INITIAL_DATA__
        } else {
            user = props.staticContext.data
        }

        this.state = {
            user,
            loading: user ? false : true,
        }

        this.getUser = this.getUser.bind(this)
    }

    componentDidMount () {
        if (!this.state.user) {
            this.getUser(this.props.match.params.id)
        }
    }

    componentDidUpdate (prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.getUser(this.props.match.params.id)
        }
    }

    getUser (name) {
        this.setState( () => ({
            loading: true
        }) )

        fetchUser(name)
            .then( user => this.setState( () => ({
                user,
                loading: false,
            }) ) )
    }

    render() {
        const { user, loading } = this.state

        if (loading) {
            return <p>Loading...</p>
        }

        if(user.message === "Not Found"){
            return (
                <div>
                   <h1> Sorry, we didn`t found anyone with this name. </h1>
                </div>
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
