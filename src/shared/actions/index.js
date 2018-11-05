import { INCREMENT, DECREMENT, ADD_USER } from '../constants'

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
