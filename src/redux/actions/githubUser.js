import {
    GET_GITHUBUSER_INFO_REQUEST,
    GET_GITHUBUSER_INFO_SUCCESS,
    GET_GITHUBUSER_INFO_FAIL,
    GET_GITHUBUSER_AVATER_SUCCESS
} from '../const/const'
import axios from 'axios'
import {githubApi} from '../../api/api'

/*action creator*/
export const getGithubUserInfoRequest = () => {
    return {
        type: GET_GITHUBUSER_INFO_REQUEST
    }
}

export const getGithubUserInfoSuccess = (githubUserInfo) => {
    return {
        type: GET_GITHUBUSER_INFO_SUCCESS,
        githubUserInfo: githubUserInfo
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


export const getGithubUser = (user) => async (dispatch) => {
    console.log(user)
    console.log(githubApi)
   try {
       dispatch(getGithubUserInfoRequest())
       let res = await axios.get(`${githubApi.githubUser}/${user}`)
       console.log('data: ', res.data)
       await dispatch(getGithubUserInfoSuccess(res.data))
   } catch (err) {
       console.log('err:', err)
       dispatch(getGithubUserInfoFail())
   }
}
