import { INCREMENT, DECREMENT, ADD_USER } from '../constants'

export default function dataReducer(state = {}, action){
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