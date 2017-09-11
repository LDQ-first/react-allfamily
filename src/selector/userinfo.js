import { createSelector } from 'reselect'
import {selectGolbal} from './index'

export const userInfoSelector = createSelector(
    selectGolbal,
    appState => appState.get('userInfo')
)

export const userInfosSelector = createSelector(
    userInfoSelector,
    userInfoState => userInfoState.get('userInfos')
)

export const isLoadingSelector = createSelector(
    userInfoSelector,
    userInfoState => userInfoState.get('isLoading')
)

export const errorMsgSelector = createSelector(
    userInfoSelector,
    userInfoState => userInfoState.get('errorMsg')
)

export const nameSelector = createSelector(
    userInfosSelector,
    userInfosState => userInfosState.get('name')
)

export const introSelector = createSelector(
    userInfosSelector,
    userInfosState => userInfosState.get('intro')
)

export const avatarSelector = createSelector(
    userInfosSelector,
    userInfosState => userInfosState.get('avatar')
)

export const githubUrlSelector = createSelector(
    userInfosSelector,
    userInfosState => userInfosState.get('githubUrl')
)

export const loginSelector = createSelector(
    userInfosSelector,
    userInfosState => userInfosState.get('login')
)

