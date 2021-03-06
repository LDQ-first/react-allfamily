import { combineReducers } from 'redux-immutable'
import counter from './reducer/counter'
import userInfo from './reducer/userInfo'
import nav from './reducer/nav'
import githubUser from './reducer/githubUser'
import githubOrg from './reducer/githubOrg'
import test from './reducer/test'
import {musicSongAction, musicSongLists, musicDisLists, musicLyrics} from './reducer/music.js'
import { LOCATION_CHANGE } from 'react-router-redux'
import { fromJS } from 'immutable'

const routeInitialState = fromJS({
  locationBeforeTransitions: null
})
/**
 * Merge route into the global application state
 */
const routeReducer = (state = routeInitialState, action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload
      })
    default:
      return state
  }
}


export default combineReducers({
    route: routeReducer,
    global: combineReducers({
      counter,
      userInfo,
      nav,
      githubUser,
      githubOrg,
      test,
      musicSongAction,
      musicSongLists,
      musicDisLists,
      musicLyrics
    })
})

