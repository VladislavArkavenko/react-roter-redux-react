import { combineReducers } from 'redux'

import counter from '../common/redux-modules/counterModule'
import repos from '../common/redux-modules/reposModule'

export default combineReducers({
    counter,
    repos
});