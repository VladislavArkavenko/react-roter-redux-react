import reducerRegistry from './reducerRegistry';

// Initial State
const initialState = {}

// Constants
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const ADD_USER = "ADD_USER"

// Actions
export const increment = (user) => ({
    type: INCREMENT,
    payload: user
});
export const decrement = (user) => ({
    type: DECREMENT,
    payload: user
});
export const addUser = (user) => ({
    type: ADD_USER,
    payload: user
});

// Reducer Name
const reducerName = 'counter';

// Reducer
export default function reducer(state = initialState, action){
    switch(action.type){
        case ADD_USER:
            return Object.assign({}, state, { [action.payload]: 0 })
        case INCREMENT:
            return Object.assign({}, state, { [action.payload]: ++state[action.payload] })
        case DECREMENT:
            return Object.assign({}, state, { [action.payload]: --state[action.payload] })
        default:
            return state
    }
}

//Register Reducer
reducerRegistry.register(reducerName, reducer);