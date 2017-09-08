import { createSelector } from 'reselect'
import {selectGolbal} from './index'


export const githubOrgSelector = createSelector(
    selectGolbal,
    appState => appState.get('githubOrg')
)


export const githubOrgInfosSelector = createSelector(
    githubOrgSelector,
    githubOrgState => githubOrgState.get('githubOrgInfos')
)

export const isLoadingSelector = createSelector(
    githubOrgSelector,
    githubOrgState => githubOrgState.get('isLoading')
)

export const errorMsgSelector = createSelector(
    githubOrgSelector,
    githubOrgState => githubOrgState.get('errorMsg')
)

export const nameSelector = createSelector(
    githubOrgInfosSelector,
    githubOrgInfosState => githubOrgInfosState.get('name')
)

export const avatarSelector = createSelector(
    githubOrgInfosSelector,
    githubOrgInfosState => githubOrgInfosState.get('avatar_url')
)

export const descriptionSelector = createSelector(
    githubOrgInfosSelector,
    githubOrgInfosState => githubOrgInfosState.get('description')
)

export const createdAtSelector = createSelector(
    githubOrgInfosSelector,
    githubOrgInfosState => githubOrgInfosState.get('created_at')
)

export const updatedAtSelector = createSelector(
    githubOrgInfosSelector,
    githubOrgInfosState => githubOrgInfosState.get('updated_at')
)

export const githubUrlSelector = createSelector(
    githubOrgInfosSelector,
    githubOrgInfosState => githubOrgInfosState.get('html_url')
)


export const reposUrlSelector = createSelector(
    githubOrgInfosSelector,
    githubOrgInfosState => githubOrgInfosState.get('repos_url')
)

export const publicReposSelector = createSelector(
    githubOrgInfosSelector,
    githubOrgInfosState => githubOrgInfosState.get('public_repos')
)

export const blogSelector = createSelector(
    githubOrgInfosSelector,
    githubOrgInfosState => githubOrgInfosState.get('blog')
)

export const locationSelector = createSelector(
    githubOrgInfosSelector,
    githubOrgInfosState => githubOrgInfosState.get('location')
)

export const companySelector = createSelector(
    githubOrgInfosSelector,
    githubOrgInfosState => githubOrgInfosState.get('company')
)

export const emailSelector = createSelector(
    githubOrgInfosSelector,
    githubOrgInfosState => githubOrgInfosState.get('email')
)


