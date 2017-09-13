import React, { Component } from 'react'
import {connect} from 'react-redux'
import Loading from '../../components/Loading/Loading'
import {Container} from '../../styled'
import PropTypes from 'prop-types'
import {MusicDiv} from '../../styled/music.js'
import {musicApi} from '../../api/api.js' 
import {
   songListsIsLoadingSelector,
   songListsErrorMsgSelector,
   songListSelector,
   disListsIsLoadingSelector,
   disListsErrorMsgSelector,
   disListSelector,
   lyricStatusSelector,
   lyricIsLoadingSelector,
   lyricErrorMsgSelector,
   lyricSelector,
   isPlayingSelector,
   songIndexSelector,
   isAutoplaySelector,
   isMutedSelector
} from '../../selector/music.js'
import * as musicAction  from '../../redux/actions/music.js'
import Immutable from 'immutable'
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation'
import RestoreIcon from 'material-ui-icons/Restore'
import FavoriteIcon from 'material-ui-icons/Favorite'
import LocationOnIcon from 'material-ui-icons/LocationOn'
import FolderIcon from 'material-ui-icons/Folder'
import SongList from '../../components/SongList/SongList.js'
import IconButton from 'material-ui/IconButton'
import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'
import Collapse from 'material-ui/transitions/Collapse'
import DisList from '../../components/DisList/DisList.js'
import Player from '../../components/Player/Player.js'


const mapStateToProps = (state) => ({
    songListsIsLoading: songListsIsLoadingSelector(state),
    songListsErrorMsg: songListsErrorMsgSelector(state),  
    songList: songListSelector(state),
    disListsIsLoading: disListsIsLoadingSelector(state),
    disListsErrorMsg: disListsErrorMsgSelector(state),  
    disList: disListSelector(state),
    lyricStatus: lyricStatusSelector(state),
    lyricIsLoading: lyricIsLoadingSelector(state),
    lyricError: lyricErrorMsgSelector(state),
    lyric: lyricSelector(state),
    isPlaying: isPlayingSelector(state),
    songIndex: songIndexSelector(state),
    isAutoplay: isAutoplaySelector(state),
    isMuted: isMutedSelector(state)
})




class Music extends Component {
    static get propTypes() { 
        return { 
            songListsIsLoading: PropTypes.bool,
            songListsErrorMsg: PropTypes.string,
            songList: PropTypes.array,
            getSongLists: PropTypes.func,
            disListsIsLoading: PropTypes.bool,
            disListsErrorMsg: PropTypes.string,
            disList: PropTypes.array,
            getDisLists: PropTypes.func,
            lyricStatus: PropTypes.number,
            lyricIsLoading: PropTypes.string,
            lyricErrorMsg: PropTypes.string,
            lyric: PropTypes.array,
            getLyrics: PropTypes.func,

            isPlaying: PropTypes.bool,
            isAutoplay: PropTypes.bool,
            isMuted: PropTypes.bool,
            songIndex: PropTypes.number,

            play: PropTypes.func,
            pause: PropTypes.func,
            autoplay: PropTypes.func,
            mute: PropTypes.func,


            beforeSong: PropTypes.func,
            nextSong: PropTypes.func,
            chooseSong: PropTypes.func,
        }
    }

    constructor(porps) {
        super(porps)
        this.state = {
            value: 0,
            open: true,
            duration: '00:00',
            currentTime: '00:00',
            played: 0,
            loaded: 0,
        }
    }

    
    
    componentWillMount() {
        const {getSongLists, songList, getDisLists, autoplay, isAutoplay} = this.props
        getSongLists()   
        if(localStorage.isAutoplay === 'true' ) {
            autoplay()
        }
        

       
    }
    
    componentWillReceiveProps(nextProps) {
         const {isAutoplay, lyric, isPlaying, pause} = nextProps
         if(isAutoplay) {
             this._musicPlayer.autoplay = isAutoplay
         }


         this.setState({
             volume: this._musicPlayer.volume
         })
         this.setState({
             lyric,
             isNewLyric: true
         })
    }
    
    




    handleChange = (e, value) => {
        this.setState({
            value
        })
    } 

    handleClick = () => {
        this.setState({ open: !this.state.open });
    }

    getSong = (list, index) => {
        const {isAutoplay , isPlaying, pause} = this.props
        const { songid, albummid, songname, singer } = list
        console.log(songid, albummid)
        const albumImgUrl = musicApi.albumImg(albummid)
        const songUrl = musicApi.song(songid)
        console.log(albumImgUrl, '\n' , songUrl)
        this.setState({
            albumImgUrl,
            songUrl,
            songname,
            singer,
            index,
            songid,
            isNewLyric: false
        })
        if(!isAutoplay && isPlaying) {
             pause()
         }

       this.getLyric(songid)
    }


    formatNum(num) {
        return num < 10 ? `0${num}` : num + '' 
    }


    formatSongTime (time) {
        const min = this.formatNum(parseInt(time / 60))
        const sec = this.formatNum(parseInt(time - min * 60))
        return `${min}:${sec}`
    }


    getTime () {
        const duration = this.formatSongTime(this._musicPlayer.duration)
        const currentTime = this.formatSongTime(this._musicPlayer.currentTime)
        const played = this._musicPlayer.currentTime / this._musicPlayer.duration
        this.setState({
            duration,
            currentTime,
            played,
            currentSTime: this._musicPlayer.currentTime
        })
    }

    upsateTime () {
        if(!this._musicPlayer.duration) return
        this.getTime ()
    }


    playSong = () => {
        console.log('play')
        const {songUrl} = this.state
        const {play} = this.props
        if(!songUrl) return
        this._musicPlayer.play()
        this.setState({
            isPlaying: true
        })
        play()
        
    }

    pauseSong = () => {
        console.log('pause')
        const {songUrl} = this.state
        const {pause} = this.props
        if(!songUrl) return
        this._musicPlayer.pause()
        this.setState({
            isPlaying: false
        })
        pause()
    }

    toggleAutoPlay () {
        const {autoplay, isAutoplay} = this.props
        autoplay()
        this._musicPlayer.autoplay = !isAutoplay
        localStorage.isAutoplay = !isAutoplay
    }

    getProgress() {
        let spu = 0, loaded
        const audio = this._musicPlayer
        for (var i = 0; i < audio.buffered.length; i++) {
            spu += audio.buffered.end(i) - audio.buffered.start(i)
            loaded = spu / audio.duration
          //  console.log(spu / audio.duration)
        }
        this.setState({
            loaded
        })
        
    }

    changeVolume () {
       const {mute, isMuted} = this.props
        if(!isMuted && this._musicPlayer.muted) {
            mute()
        }
        else if(this._musicPlayer.volume === 0 && !isMuted ) {
            mute()
        } else if(this._musicPlayer.volume > 0 && isMuted && !this._musicPlayer.muted) {
            mute()
        }
         this.setState({
             volume: this._musicPlayer.volume,
             isMuted: this._musicPlayer.muted
         })
    }

    mutePlayer () {
         const {mute, isMuted} = this.props
         mute()
         this._musicPlayer.muted = !isMuted
    }


    changeSong (status) {
        console.log(status)
        const {disList} = this.props
        const {index} = this.state
        const jsDisList = Immutable.List(disList).toJS()
        console.log(index)
        console.log(jsDisList.length)
        if(status === 'before' && index > 0) {
            this.getSong(jsDisList[index - 1])
            this.setState({
                index: index - 1
            })
        } else if (status === 'next' && index < jsDisList.length - 1) {
            this.getSong(jsDisList[index + 1])
            this.setState({
                index: index + 1
            })
        }
    }


    getLyric (songid) {
        const {getLyrics} = this.props
        console.log(songid)
        getLyrics(songid)
    }


    render() {
        const {value, open, songUrl, albumImgUrl, songname, singer,
            duration, currentTime, played,loaded, volume,
             index, songid, isNewLyric, currentSTime} = this.state
        const {
            songList, getDisLists, disList, lyricStatus,
             isPlaying, play, pause, isAutoplay, isMuted,
             beforeSong, nextSong,  chooseSong
            } = this.props
        const jsSongList = Immutable.List(songList).toJS()
        const jsDisList = Immutable.List(disList).toJS()

        let lyric = ''
        if(isNewLyric) {
            lyric = this.state.lyric
        }


        const SongLists = jsSongList.map((list, index) => {
            return (
                value === index && 
                <SongList img={list.picUrl}  songListDesc={list.songListDesc} 
                id={list.id} getDisLists={getDisLists}/>
            )
        })




        return (
            <Container>
                <MusicDiv>
                     <div className="music-player">
                          <audio controls ref={audio => this._musicPlayer = audio}
                          className="audio" src={songUrl}
                          onCanPlay = {() => {this.getTime();}}
                          onTimeUpdate = {() => { this.upsateTime()}}
                          onProgress = {() => { this.getProgress()}}
                          onVolumeChange = {() => {this.changeVolume()}}
                          onPlay = {() => {play()}}
                          onPause = {() => {pause()}}

                          >你的浏览器不支持喔！</audio>
                          <Player _this={this} albumImgUrl={albumImgUrl}  songname={songname} singer={singer}
                          duration={duration} currentTime={currentTime}   

                          isPlaying={isPlaying} play={play} pause={pause} isAutoplay = {isAutoplay} isMuted={isMuted}

                          played={played} loaded={loaded}   
                           volume={volume}  lyric={lyric} currentSTime={currentSTime}
                          isNewLyric={isNewLyric}/>
                          <IconButton color="primary" onClick={this.handleClick} className="song-lists-expand">
                            {open ? <ExpandMore /> : <ExpandLess />}
                          </IconButton >
                     </div>
                     <Collapse in={open} className="song-lists-wrapper">
                           {SongLists}
                           <DisList jsDisList={jsDisList} _this={this} value={value} index={index}/>
                        <BottomNavigation
                            className="song-lists-control"
                            value={value}
                            onChange={this.handleChange}
                            showLabels
                        >
                            <BottomNavigationButton label="经典" icon={<RestoreIcon />} />
                            <BottomNavigationButton label="日语" icon={<FavoriteIcon />} />
                            <BottomNavigationButton label="民谣" icon={<LocationOnIcon />} />
                            <BottomNavigationButton label="ACG" icon={<FolderIcon />} />
                        </BottomNavigation>

                     </Collapse>
                </MusicDiv>
            </Container>
        )
    }
}









export default connect(
    mapStateToProps,
    musicAction
)(Music)