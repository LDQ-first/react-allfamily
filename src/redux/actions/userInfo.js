import {
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAIL
} from '../const/const'
import axios from 'axios'

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
export const getUserInfo = () => {
    return (dispatch) => {
        dispatch(getUserInfoRequest())

        return axios.get('http://localhost:5050/src/api/user.json')
                    .then(res => res.data)
                    .then(data => {
                       console.log(data)
                       setTimeout(() => {
                           dispatch(getUserInfoSuccess())
                       }, 1000)
                    }).catch( err => {
                        dispatch(getUserInfoFail())
                    })

    }
}
