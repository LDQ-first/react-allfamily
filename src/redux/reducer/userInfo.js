import {
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAIL
} from '../const/const'

const initState = {
    status: 0,
    isLoading: false,
    userInfo: {},
    errorMsg: ''
}


export default (state = initState, action) => {
    switch(action.type) {
        case GET_USER_INFO_REQUEST:
            return {
                ...state,
                isLoading: true,
                userInfo: {},
            }
        case GET_USER_INFO_SUCCESS:
            return {
                ...state,
                status: 200,
                isLoading: false,
                userInfo: action.userInfo,
            }
        case GET_USER_INFO_FAIL:
            return {
                ...state,
                status: 404,
                errotMsg: '请求错误'
            }
        default: 
             return state
    }
}
