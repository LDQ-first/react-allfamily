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

export const loginSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => githubUserInfosState.get('login')
)

export const avatarSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => githubUserInfosState.get('avatarUrl')
)

export const createdAtSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => githubUserInfosState.get('createdAt')
)

export const updatedAtSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => githubUserInfosState.get('updatedAt')
)

export const githubUrlSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => githubUserInfosState.get('githubUrl')
)

export const reposUrlSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => githubUserInfosState.get('reposUrl')
)

export const publicReposSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => githubUserInfosState.get('publicRepos')
)

export const followersSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => githubUserInfosState.get('followers')
)

export const followingSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => githubUserInfosState.get('following')
)


export const companySelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => githubUserInfosState.get('company')
)


export const blogSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => githubUserInfosState.get('blog')
)


export const locationSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => githubUserInfosState.get('location')
)


export const bioSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => githubUserInfosState.get('bio')
)

export const ReposSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => githubUserInfosState.get('Repos')
)



