import {
    GET_SONGLISTS_REQUEST,
    GET_SONGLISTS_SUCCESS,
    GET_SONGLISTS_FAIL,

    GET_DISLISTS_REQUEST,
    GET_DISLISTS_SUCCESS,
    GET_DISLISTS_FAIL,

    GET_LYRIC_REQUEST,
    GET_LYRIC_SUCCESS,
    GET_LYRIC_FAIL

} from '../const/const'
import { fromJS, Map } from 'immutable'


const initState = fromJS({
    songListsStatus: 0,
    songListsIsLoading: false,
    songLists: {},
    songListsErrorMsg: ''
})

export const musicSongLists = (state = initState, action) => {
    switch(action.type) {
        case GET_SONGLISTS_REQUEST:
            return state.set('isLoading', true)
        case GET_SONGLISTS_SUCCESS:
            console.log(action)
            return (state = fromJS({
                ...state,
                songListsStatus: 200,
                songListsIsLoading: false,
                songLists: action.songLists
            }))
        case GET_SONGLISTS_FAIL:
            return (state = fromJS({
                ...state,
                songListsStatus: 404,
                songListsErrorMsg: '请求的歌不存在'
            }))
        default: 
             return state
    }
}


