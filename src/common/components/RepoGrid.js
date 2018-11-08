import { requestRepos } from '../redux-modules/reposModule'
import React, { Component , Fragment } from 'react'
import { connect } from 'react-redux'

class RepoGrid extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount () {
        const isNewLang = !this.props.data[this.props.match.params.language]

        if (isNewLang) {
            this.fetchRepos(this.props.repos, this.props.match)
        }
    }

    componentWillReceiveProps(nextProps) {
        const isNewLang = !this.props.data[nextProps.match.params.language]

        if (isNewLang) {
            this.fetchRepos(nextProps.repos, nextProps.match)
        }
    }

    fetchRepos ( repos, match ) {
        if(!repos) {
            this.props.requestRepos( match.params.language )
        }
    }

    render() {
        const {error, repos}  = this.props;

        if (this.props.error) {
            return (
                <Fragment>
                    <h6> Ops! There is { error.status } error. </h6>
                    <p> { error.message } </p>
                </Fragment>
            )
        } else if (!repos) {
            return(
                <Fragment>
                    <h2> Loading... </h2>
                    <p>  Please wait a few seconds </p>
                </Fragment>
                )
        } else {
            return (
                <ul style={{display: 'flex', flexWrap: 'wrap'}}>
                    {
                        repos.map( ({ name, owner, stargazers_count, html_url }) => (
                            <li key={name} style={{margin: 30}}>
                                <ul>
                                    <li><a href={html_url}> {name} </a></li>
                                    <li> @{owner.login} </li>
                                    <li> {stargazers_count} stars </li>
                                </ul>
                            </li>
                        ) )
                    }
                </ul>
            )
        }
    }

}

const mapStateToProps = (state, ownProps) => {


    return {
        error: state.repos.error,
        repos:  state.repos.data[ownProps.match.params.language],
        data: state.repos.data
    }
}

const mapDispatchToProps = {requestRepos}

export default connect(mapStateToProps, mapDispatchToProps)(RepoGrid)