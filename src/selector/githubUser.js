import { createSelector } from 'reselect'
import {selectGolbal} from './index'


export const githubUserInfoSelector = createSelector(
    selectGolbal,
    appState => appState.get('githubUserInfo')
)

export const githubUserInfosSelector = createSelector(
    githubUserInfoSelector,
    githubUserInfoState => githubUserInfoState.get('githubUserInfos')
)

export const isLoadingSelector = createSelector(
    githubUserInfoSelector,
    githubUserInfoState => githubUserInfoState.get('isLoading')
)

export const errorMsgSelector = createSelector(
    githubUserInfoSelector,
    githubUserInfoState => githubUserInfoState.get('errorMsg')
)

export const nameSelector = createSelector(
    userInfosSelector,
    userInfosState => userInfosState.get('name')
)

export const avatarSelector = createSelector(
    userInfosSelector,
    userInfosState => userInfosState.get('avatar')
)


