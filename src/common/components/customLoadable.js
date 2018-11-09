import Loadable from 'react-loadable'
import React from 'react'

const Loading = props => {
    if (props.error) {
        return (
            <div>
                <p> Error! </p>
                <button onClick={ props.retry }> Retry </button>
            </div>
        )
    } else if ( props.timedOut) {
        return (
            <div>
                <p> Taking a long time... </p>
                <button onClick={ props.retry}> Retry </button>
            </div>
            )
    } else if (props.pastDelay) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    } else {
        return null
    }
}

export default function configLoadable(opts) {
    return Loadable(Object.assign({
        loading: Loading,
        delay: 500,
        timeout: 20000
    }, opts));
};