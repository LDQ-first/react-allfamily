import { createSelector } from 'reselect'
import {selectGolbal} from './index'


export const musicSongListsSelector = createSelector(
    selectGolbal,
    appState => appState.get('musicSongLists')
)


export const songListsSelector = createSelector(
    musicSongListsSelector,
    musicSongListsState => musicSongListsState.get('songLists')
)

export const songListsIsLoadingSelector = createSelector(
    songListsSelector,
    songListsState => songListsState.get('songListsIsLoading')
)

export const songListsErrorMsgSelector = createSelector(
    songListsSelector,
    songListsState => songListsState.get('songListsErrorMsg')
)

export const songListSelector = createSelector(
    songListsSelector,
    songListsState => songListsState.get('songList')
)