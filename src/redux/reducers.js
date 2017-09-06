import {combineReducers } from 'redux'
import counter from './reducer/counter'
import userInfo from './reducer/userInfo'


export default combineReducers({
    counter,
    userInfo
})

