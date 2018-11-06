import { combineReducers, createStore } from 'redux'
import reducerRegistry from './reducerRegistry'

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

const combine = (reducers) => {
    const reducerNames = Object.keys(reducers)

    Object.keys(preloadedState).forEach(item => {
        if (reducerNames.indexOf(item) === -1) {
            reducers[item] = (state = null) => state
        }
    })

    return combineReducers(reducers)
};

const reducers = combine( reducerRegistry.getReducers() )
const store = createStore(
    reducers,
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// Replace the store's reducer whenever a new reducer is registered.
reducerRegistry.setChangeListener( reducers => {
    store.replaceReducer( combine(reducers) )
})

export default store