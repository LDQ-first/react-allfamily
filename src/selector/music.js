import { createSelector } from 'reselect'
import {selectGolbal} from './index'

export const musicSelector = createSelector(
    selectGolbal,
    appState => appState.get('songList')
)

export const isLoadingSelector = createSelector(
    musicSelector,
    testState => testState.get('isLoading')
)

export const errorMsgSelector = createSelector(
    musicSelector,
    testState => testState.get('errorMsg')
)

export const songListSelector = createSelector(
    musicSelector,
    appState => appState.get('songList')
)