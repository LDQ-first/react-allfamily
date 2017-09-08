import { createSelector } from 'reselect'
import {selectGolbal} from './index'


export const githubUserSelector = createSelector(
    selectGolbal,
    appState => appState.get('githubUser')
)


export const githubUserInfosSelector = createSelector(
    githubUserSelector,
    githubUserState => githubUserState.get('githubUserInfos')
)

export const isLoadingSelector = createSelector(
    githubUserSelector,
    githubUserState => githubUserState.get('isLoading')
)

export const errorMsgSelector = createSelector(
    githubUserSelector,
    githubUserState => githubUserState.get('errorMsg')
)

export const nameSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => githubUserInfosState.get('name')
)

export const avatarSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => githubUserInfosState.get('avatar_url')
)


