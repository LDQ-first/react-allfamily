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

export const loginSelector = createSelector(
    githubOrgInfosSelector,
    githubOrgInfosState => githubOrgInfosState.get('login')
)



export const avatarSelector = createSelector(
    githubOrgInfosSelector,
    githubOrgInfosState => githubOrgInfosState.get('avatarUrl')
)

export const descriptionSelector = createSelector(
    githubOrgInfosSelector,
    githubOrgInfosState => githubOrgInfosState.get('description')
)

export const createdAtSelector = createSelector(
    githubOrgInfosSelector,
    githubOrgInfosState => githubOrgInfosState.get('createdAt')
)

export const updatedAtSelector = createSelector(
    githubOrgInfosSelector,
    githubOrgInfosState => githubOrgInfosState.get('updatedAt')
)

export const githubUrlSelector = createSelector(
    githubOrgInfosSelector,
    githubOrgInfosState => githubOrgInfosState.get('githubUrl')
)


export const reposUrlSelector = createSelector(
    githubOrgInfosSelector,
    githubOrgInfosState => githubOrgInfosState.get('reposUrl')
)

export const publicReposSelector = createSelector(
    githubOrgInfosSelector,
    githubOrgInfosState => githubOrgInfosState.get('publicRepos')
)

export const blogSelector = createSelector(
    githubOrgInfosSelector,
    githubOrgInfosState => githubOrgInfosState.get('blog')
)

export const locationSelector = createSelector(
    githubOrgInfosSelector,
    githubOrgInfosState => githubOrgInfosState.get('location')
)

export const ReposSelector = createSelector(
    githubOrgInfosSelector,
    githubOrgInfosState => githubOrgInfosState.get('Repos')
)



