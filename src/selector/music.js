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

export const isLoadingSelector = createSelector(
    songListsSelector,
    songListsState => songListsState.get('isLoading')
)

export const errorMsgSelector = createSelector(
    songListsSelector,
    songListsState => songListsState.get('errorMsg')
)

export const songListSelector = createSelector(
    songListsSelector,
    songListsState => songListsState.get('songList')
)