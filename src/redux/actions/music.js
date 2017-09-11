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
import axios from 'axios'
import {musicApi} from '../../api/api.js' 
import fetchJsonp from 'fetch-jsonp'


/*action creator*/
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
    console.log(data.songList)

    const newData = {
        songList: data.songList
    }
    return newData
}



export const getSongLists = () => async (dispatch) => {

   try {
       dispatch(getsongListsRequest())
       let res = await axios.get(musicApi.songLists)
       console.log('data: ', res.data.data)
       await dispatch(getsongListsSuccess(filterSongListsData(res.data.data)))
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
    const newSongList = data.songList.map((item, index) => {
        return {
            albummid: item.albummid,
            albumname: item.albumname,
            singer: item.singer[0].name,
            songname: item.songname,
            songid: item.songid
        }
    })

    const newData = {
        songnum: newSongList
    }
    return newData
}



export const getDisLists = (disstid) => async (dispatch) => {

   try {
       dispatch(getdisListsRequest())
       let res = await fetchJsonp(musicApi.disLists(disstid), {
            jsonpCallbackFunction: 'taogeDataCallback'
        })
        let data = res.json()
       console.log('data: ', data)
       await dispatch(getdisListsSuccess(filterDisListsData(data)))
   } catch (err) {
       console.log('err:', err)
       dispatch(getdisListsFail())
   }
}






/*

//song
export const getsongRequest = () => {
    return {
        type: GET_SONG_REQUEST
    }
}

export const getsongSuccess = (song) => {
    return {
        type: GET_SONG_SUCCESS,
        song: song
    }
}

export const getsongFail = () => {
    return {
        type: GET_SONG_FAIL
    }
}
*/



//lyric
export const getlyricRequest = () => {
    return {
        type: GET_LYRIC_REQUEST
    }
}

export const getlyricSuccess = (lyric) => {
    return {
        type: GET_LYRIC_SUCCESS,
        lyric: lyric
    }
}

export const getlyricFail = () => {
    return {
        type: GET_LYRIC_FAIL
    }
}




const filterLyricData = (data) => {
    const newSongList = data.songList.splice(3,1).splice(4,1)
    console.log(newSongList)

    const newData = {
        songList: newSongList
    }
    return newData
}



export const getLyric = (songid) => async (dispatch) => {

   try {
       dispatch(getlyricRequest())
       let res = await axios.get(musicApi.lyric(songid))
       console.log('data: ', res.data)
       await dispatch(getlyricSuccess(filterLyricData(res.data)))
   } catch (err) {
       console.log('err:', err)
       dispatch(getlyricFail())
   }
}


