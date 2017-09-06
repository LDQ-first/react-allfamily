import {
    TAGGLE_MENU
} from '../const/const'

const initSate = {
    open: false
}

export default (state = initSate, action) => {
    switch(action.type) {
        case TAGGLE_MENU:
            return {
                open: !state.open 
            }
        default:
            return state
    }
}