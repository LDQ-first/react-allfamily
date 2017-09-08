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

export const createdAtSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => githubUserInfosState.get('created_at')
)

export const updatedAtSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => githubUserInfosState.get('updated_at')
)

export const githubUrlSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => githubUserInfosState.get('html_url')
)

export const reposUrlSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => githubUserInfosState.get('repos_url')
)

export const publicReposSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => githubUserInfosState.get('public_repos')
)

export const publicGistsSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => githubUserInfosState.get('public_gists')
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


export const emailSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => githubUserInfosState.get('email')
)

export const bioSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => githubUserInfosState.get('bio')
)



