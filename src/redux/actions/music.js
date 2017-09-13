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

export const getlyricSuccess = (lyric) => {
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
    const newSongList = data.songList.splice(3,1).splice(4,1)
    console.log(newSongList)

    const newData = {
        lyric: newSongList
    }
    return newData
}



export const getLyrics = (songid) => async (dispatch) => {

   try {
       dispatch(getlyricRequest())
       let res = await axios.get(musicApi.lyric(songid), {
            'accept': '*/*',
            'authority': 'c.y.qq.com',
            'referer': 'https://c.y.qq.com',
            'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'
       })
       console.log('data: ', res.data)
       await dispatch(getlyricSuccess(filterLyricData(res.data)))
   } catch (err) {
       console.log('err:', err)
       dispatch(getlyricFail())
   }
}


