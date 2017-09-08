import {
    GET_GITHUBORG_INFO_REQUEST,
    GET_GITHUBORG_INFO_SUCCESS,
    GET_GITHUBORG_INFO_FAIL,
    GET_GITHUBORG_AVATER_SUCCESS
} from '../const/const'
import axios from 'axios'
import {githubApi} from '../../api/api'

/*action creator*/
export const getGithubOrgInfoRequest = () => {
    return {
        type: GET_GITHUBORG_INFO_REQUEST
    }
}

export const getGithubOrgInfoSuccess = (githubOrgInfo) => {
    return {
        type: GET_GITHUBORG_INFO_SUCCESS,
        githubOrgInfo: githubOrgInfo
    }
}

export const getGithubOrgInfoFail = () => {
    return {
        type: GET_GITHUBORG_INFO_FAIL
    }
}

/* GithubOrg dispatch */
/*export const getGithubOrg = (Org) => {
    return (dispatch) => {
        dispatch(getGithubOrgInfoRequest())

        return axios.get(`${githubApi.githubOrg}/${Org}`)
                    .then(res => res.data)
                    .then(data => {
                        dispatch(getGithubOrgInfoSuccess(data))
                    }).catch( err => {
                        dispatch(getGithubOrgInfoFail())
                    })

    }
}*/


export const getGithubOrg = (Org) => async (dispatch) => {
    console.log(Org)
   try {
       dispatch(getGithubOrgInfoRequest())
       let res = await axios.get(`${githubApi.githubOrg}/${Org}`)
       console.log('data: ', res.data)
       await dispatch(getGithubOrgInfoSuccess(res.data))
   } catch (err) {
       console.log('err:', err)
       dispatch(getGithubOrgInfoFail())
   }
}
