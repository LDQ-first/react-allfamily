import {
    GET_GITHUBUSER_INFO_REQUEST,
    GET_GITHUBUSER_INFO_SUCCESS,
    GET_GITHUBUSER_INFO_FAIL,
    GET_GITHUBUSER_AVATER_SUCCESS
} from '../const/const'
import axios from 'axios'
/*import {githubUserApi} from '../../api/api'*/

/*action creator*/
export const getGithubUserInfoRequest = () => {
    return {
        type: GET_GITHUBUSER_INFO_REQUEST
    }
}

export const getGithubUserInfoSuccess = (GithubUserInfo) => {
    return {
        type: GET_GITHUBUSER_INFO_SUCCESS,
        GithubUserInfo: GithubUserInfo
    }
}

export const getGithubUserInfoFail = () => {
    return {
        type: GET_GITHUBUSER_INFO_FAIL
    }
}

/* GithubUser dispatch */
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
   /*try {
       dispatch(getGithubUserInfoRequest())
       let res = await axios.get(`${githubUserApi}`)
       await setTimeout(() => {
           dispatch(getGithubUserInfoSuccess(res.data))
       }, 1000)
   } catch (err) {
       console.log('err:', err)
       dispatch(getGithubUserInfoFail())
   }*/
}
