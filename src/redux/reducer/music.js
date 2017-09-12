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


const songListsInitState = fromJS({
    songListsStatus: 0,
    songListsIsLoading: false,
    songLists: {},
    songListsErrorMsg: ''
})

export const musicSongLists = (state = songListsInitState, action) => {
    switch(action.type) {
        case GET_SONGLISTS_REQUEST:
            return state.set('isLoading', true)
        case GET_SONGLISTS_SUCCESS:
            /*console.log(action)*/
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


const disListsInitState = fromJS({
    disListsStatus: 0,
    disListsIsLoading: false,
    disLists: {},
    disListsErrorMsg: ''
})

export const musicDisLists = (state = disListsInitState, action) => {
    switch(action.type) {
        case GET_DISLISTS_REQUEST:
            return state.set('isLoading', true)
        case GET_DISLISTS_SUCCESS:
            return (state = fromJS({
                ...state,
                disListsStatus: 200,
                disListsIsLoading: false,
                disLists: action.disLists
            }))
        case GET_DISLISTS_FAIL:
            return (state = fromJS({
                ...state,
                disListsStatus: 404,
                disListsErrorMsg: '请求的歌不存在'
            }))
        default: 
             return state
    }
}

