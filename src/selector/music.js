import { createSelector } from 'reselect'
import {selectGolbal} from './index'



export const musicSongActionSelector = createSelector(
    selectGolbal,
    appState => appState.get('musicSongAction')
)


export const isPlayingSelector = createSelector(
    musicSongActionSelector,
    musicSongActionState => musicSongActionState.get('isPlaying')
)

export const isAutoplaySelector = createSelector(
    musicSongActionSelector,
    musicSongActionState => musicSongActionState.get('isAutoplay')
)

export const isMutedSelector = createSelector(
    musicSongActionSelector,
    musicSongActionState => musicSongActionState.get('isMuted')
)



export const songIndexSelector = createSelector(
    musicSongActionSelector,
    musicSongActionState => musicSongActionState.get('songIndex')
)







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






export const musicLyricsSelector = createSelector(
    selectGolbal,
    appState => appState.get('musicLyrics')
)

export const lyricStatusSelector = createSelector(
    musicLyricsSelector,
    musicLyricsState => musicLyricsState.get('lyricStatus')
)

export const lyricIsLoadingSelector = createSelector(
    musicLyricsSelector,
    musicLyricsState => musicLyricsState.get('lyricIsLoading')
)

export const lyricErrorMsgSelector = createSelector(
    musicLyricsSelector,
    musicLyricsState => musicLyricsState.get('lyricErrorMsg')
)


export const lyricsSelector = createSelector(
    musicLyricsSelector,
    musicLyricsState => musicLyricsState.get('lyrics')
)

export const lyricSelector = createSelector(
    lyricsSelector,
    lyricsState => lyricsState.get('lyric')
)