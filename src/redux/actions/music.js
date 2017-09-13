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

    BEFORE_SONG,
    NEXT_SONG,
    CHOOSE_SONG,



} from '../const/const'
import axios from 'axios'
import {musicApi} from '../../api/api.js' 
import fetchJsonp from 'fetch-jsonp'



/*action creator*/

export const play = () => {
    return {
        type: PLAY
    }
}


export const pause = () => {
    return {
        type: PAUSE
    }
}


export const before_song = () => {
    return {
        type: BEFORE_SONG
    }
}


export const next_song = () => {
    return {
        type: NEXT_SONG
    }
}


export const choose_song = (songIndex) => {
    return {
        type: CHOOSE_SONG,
        songIndex: songIndex
    }
}









//songLists
export const getsongListsRequest = () => {
    return {
        type: GET_SONGLISTS_REQUEST
    }
}

export const getsongListsSuccess = (songLists) => {
    return {
        type: GET_SONGLISTS_SUCCESS,
        songLists: songLists
    }
}

export const getsongListsFail = () => {
    return {
        type: GET_SONGLISTS_FAIL
    }
}



const filterSongListsData = (data) => {
    data.songList.splice(3,1)
    data.songList.splice(4,1)
    /*console.log(data.songList)*/

    const newData = {
        songList: data.songList
    }
    return newData
}



export const getSongLists = () => async (dispatch) => {

   try {
       dispatch(getsongListsRequest())
    //   let res = await axios.get(musicApi.songLists)
        let res = await fetchJsonp(musicApi.songLists, {
            jsonpCallbackFunction: 'taogeDataCallback'
        }).then((res) => {
            return res.json()
        })
        /*console.log(res)*/
       await dispatch(getsongListsSuccess(filterSongListsData(res.data)))
   } catch (err) {
       console.log('err:', err)
       dispatch(getsongListsFail())
   }
}







//disLists
export const getdisListsRequest = () => {
    return {
        type: GET_DISLISTS_REQUEST
    }
}

export const getdisListsSuccess = (disLists) => {
    return {
        type: GET_DISLISTS_SUCCESS,
        disLists: disLists
    }
}

export const getdisListsFail = () => {
    return {
        type: GET_DISLISTS_FAIL
    }
}



const filterDisListsData = (data) => {
    const newSongList = data.songlist.map((item, index) => {
        return {
            albummid: item.albummid,
            albumname: item.albumname,
            singer: item.singer[0].name,
            songname: item.songname,
            songid: item.songid
        }
    })

    const newData = {
        disList: newSongList
    }
    return newData
}



export const getDisLists = (disstid) => async (dispatch) => {
   try {
       dispatch(getdisListsRequest())
       let res = await fetchJsonp(musicApi.disLists(disstid), {
            jsonpCallbackFunction: 'taogeDataCallback'
        }).then((res) => {
            return res.json()
        })
       /*console.log('res.cdlist[0]: ', res.cdlist[0])*/
       await dispatch(getdisListsSuccess(filterDisListsData(res.cdlist[0])))
   } catch (err) {
       console.log('err:', err)
       dispatch(getdisListsFail())
   }
}



//lyric
export const getlyricRequest = () => {
    return {
        type: GET_LYRIC_REQUEST
    }
}

export const getlyricSuccess = (lyrics) => {
    return {
        type: GET_LYRIC_SUCCESS,
        lyrics: lyrics
    }
}

export const getlyricFail = () => {
    return {
        type: GET_LYRIC_FAIL
    }
}




const filterLyricData = (data) => {
    const newData = {
        lyric: data.lyric
    }
    return newData
}



export const getLyrics = (songid) => async (dispatch) => {

   try {
       dispatch(getlyricRequest())
       let res = await axios.get(musicApi.lyric(songid))
      /* let res = await fetchJsonp(musicApi.lyric(songid), {
            jsonpCallbackFunction: 'taogeDataCallback'
        }).then((res) => {
            return res.json()
        })*/
      /* console.log('data.lyric: ', res.data.lyric)*/
       await dispatch(getlyricSuccess(filterLyricData(res.data)))
   } catch (err) {
       console.log('err:', err)
       dispatch(getlyricFail())
   }
}


