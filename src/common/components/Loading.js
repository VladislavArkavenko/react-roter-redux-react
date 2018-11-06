import React from 'react'

export default function Loading(props) {
    if (props.error) {
        return (
            <div>
                <p> Error! </p>
                <button onClick={ props.retry }> Retry </button>
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