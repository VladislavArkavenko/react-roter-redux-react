import { combineReducers } from 'redux';

import reducer  from '../common/redux-moduls/counterModule'

export default combineReducers({
    counter: reducer
});