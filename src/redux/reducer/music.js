import {
    GET_SONGLISTS_REQUEST,
    GET_SONGLISTS_SUCCESS,
    GET_SONGLISTS_FAIL,

    GET_DISLISTS_REQUEST,
    GET_DISLISTS_SUCCESS,
    GET_DISLISTS_FAIL,

    GET_LYRIC_REQUEST,
    GET_LYRIC_SUCCESS,
    GET_LYRIC_FAIL,

    PLAY,
    PAUSE,
    AUTOPLAY,
    MUTE,
    VALUE,

    BEFORE_SONG,
    NEXT_SONG,
    CHOOSE_SONG,

} from '../const/const'
import { fromJS, Map } from 'immutable'


const songActionInitState = fromJS({
    isPlaying: false,
    songIndex: 0,
    isAutoplay: false,
    isMuted: false,
    value: 0
})


export const musicSongAction = (state = songActionInitState, action) => {
    switch(action.type) {
        case PLAY:
            return state.set('isPlaying', true)
        case PAUSE:
            return state.set('isPlaying', false)
        case AUTOPLAY:
            return state.update('isAutoplay', isAutoplay => !isAutoplay ) 
        case MUTE:
            return state.update('isMuted', isMuted => !isMuted ) 
        case VALUE:
            return state.set('value', action.value)
        case BEFORE_SONG:
            return state.update('songIndex', songIndex => songIndex - 1)
        case NEXT_SONG:
            return state.update('songIndex', songIndex => songIndex + 1)
        case CHOOSE_SONG:
            return state.set('songIndex', action.songIndex)
        default: 
             return state
    }
}










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



const lyricInitState = fromJS({
    lyricStatus: 0,
    lyricIsLoading: false,
    lyrics: {},
    lyricErrorMsg: ''
})

export const musicLyrics = (state = lyricInitState, action) => {
    switch(action.type) {
        case GET_LYRIC_REQUEST:
            return state.set('isLoading', true)
        case GET_LYRIC_SUCCESS:
            return (state = fromJS({
                ...state,
                lyricStatus: 200,
                lyricIsLoading: false,
                lyrics: action.lyrics
            }))
        case GET_LYRIC_FAIL:
            return (state = fromJS({
                ...state,
                lyricStatus: 404,
                lyricErrorMsg: '请求的歌词不存在'
            }))
        default: 
             return state
    }
}