import {
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAIL,
    GET_USER_AVATER_SUCCESS
} from '../const/const'
import axios from 'axios'
import {userApi} from '../../api/api'

/*action creator*/
export const getUserInfoRequest = () => {
    return {
        type: GET_USER_INFO_REQUEST
    }
}

export const getUserInfoSuccess = (userInfo) => {
    return {
        type: GET_USER_INFO_SUCCESS,
        userInfo: userInfo
    }
}

export const getUserInfoFail = () => {
    return {
        type: GET_USER_INFO_FAIL
    }
}

/* user dispatch */
/*export const getUserInfo = () => {
    return (dispatch) => {
        dispatch(getUserInfoRequest())

        return axios.get(userApi)
                    .then(res => res.data)
                    .then(data => {
                       setTimeout(() => {
                           dispatch(getUserInfoSuccess(data))
                       }, 1000)
                    }).catch( err => {
                        dispatch(getUserInfoFail())
                    })

    }
}*/


export const getUserInfo = () => async (dispatch) => {
   try {
       dispatch(getUserInfoRequest())
       let res = await axios.get(`${userApi}`)
       await setTimeout(() => {
           dispatch(getUserInfoSuccess(res.data))
       }, 1000)
   } catch (err) {
       console.log('err:', err)
       dispatch(getUserInfoFail())
   }
}
