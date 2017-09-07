import {
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAIL
} from '../const/const'
import { fromJS, Map } from 'immutable'

const initState = fromJS({
    status: 0,
    isLoading: false,
    userInfos: {},
    errorMsg: ''
})


export default (state = initState, action) => {
    switch(action.type) {
        case GET_USER_INFO_REQUEST:
            return state.set('isLoading', true)
        case GET_USER_INFO_SUCCESS:
            return (state = fromJS({
                ...state,
                status: 200,
                isLoading: false,
                userInfos: action.userInfo
            }))
        case GET_USER_INFO_FAIL:
            return (state = fromJS({
                ...state,
                status: 404,
                errotMsg: '请求错误'
            }))
        default: 
             return state
    }
}
