const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

const combine = (reducers) => {
    const reducerNames = Object.keys(reducers);
    Object.keys(preloadedState).forEach(item => {
        if (reducerNames.indexOf(item) === -1) {
            reducers[item] = (state = null) => state
        }
    });
    return combineReducers(reducers)
};