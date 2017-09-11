import { createSelector } from 'reselect'
import {selectGolbal} from './index'


export const musicSongListsSelector = createSelector(
    selectGolbal,
    appState => appState.get('musicSongLists')
)

export const songListsIsLoadingSelector = createSelector(
    musicSongListsSelector,
    musicSongListsState => musicSongListsState.get('songListsIsLoading')
)

export const songListsErrorMsgSelector = createSelector(
    musicSongListsSelector,
    musicSongListsState => musicSongListsState.get('songListsErrorMsg')
)


export const songListsSelector = createSelector(
    musicSongListsSelector,
    musicSongListsState => musicSongListsState.get('songLists')
)


export const songListSelector = createSelector(
    songListsSelector,
    songListsState => songListsState.get('songList')
)





export const musicDisListsSelector = createSelector(
    selectGolbal,
    appState => appState.get('musicDisLists')
)

export const disListsIsLoadingSelector = createSelector(
    musicDisListsSelector,
    musicDisListsState => musicDisListsState.get('disListsIsLoading')
)

export const disListsErrorMsgSelector = createSelector(
    musicDisListsSelector,
    musicDisListsState => musicDisListsState.get('disListsErrorMsg')
)


export const disListsSelector = createSelector(
    musicDisListsSelector,
    musicDisListsState => musicDisListsState.get('disLists')
)

export const disListSelector = createSelector(
    disListsSelector,
    disListsState => disListsState.get('disList')
)
