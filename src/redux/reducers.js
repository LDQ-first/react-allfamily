import {combineReducers } from 'redux'
import counter from './reducer/counter'
import userInfo from './reducer/userInfo'
import nav from './reducer/nav'

export default combineReducers({
    counter,
    userInfo,
    nav
})

