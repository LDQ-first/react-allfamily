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
   disListSelector
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
        }
    }

    constructor(porps) {
        super(porps)
        this.state = {
            value: 0,
            open: true,
            duration: '00:00',
            currentTime: '00:00',
            played: 0
        }
        

    }

    
    
    componentWillMount() {
        const {getSongLists, songList, getDisLists} = this.props
        getSongLists()   

       
    }
    
    componentWillReceiveProps(nextProps) {
        /* const {duration, currentTime} = this.state
         console.log(duration)
        console.log(currentTime)
         this.setState({
            duration: '00:00',
            currentTime: '00:00',
            played: 0
        })
        console.log(duration)
        console.log(currentTime)*/

    }
    
    




    handleChange = (e, value) => {
        this.setState({
            value
        })
    } 

    handleClick = () => {
        this.setState({ open: !this.state.open });
    }

    getSong = (list) => {
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
        })
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
            played
        })
    }

    upsateTime () {
        if(!this._musicPlayer.duration) return
        this.getTime ()
    }


    playSong = () => {
        console.log('play')
        const {songUrl} = this.state
        if(!songUrl) return
        this._musicPlayer.play()
        
        
    }

    pauseSong = () => {
        console.log('pause')
        const {songUrl} = this.state
        if(!songUrl) return
        this._musicPlayer.pause()
    }





    render() {
        const {value, open, songUrl, albumImgUrl, songname, singer,
            duration, currentTime, played} = this.state
       /* console.log('this.props: ', this.props)*/
        const {songList, getDisLists, disList} = this.props
        const jsSongList = Immutable.List(songList).toJS()
        const jsDisList = Immutable.List(disList).toJS()
        /*console.log(jsDisList)*/

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
                          onCanPlay = {() => {this.getTime()}}
                          onTimeUpdate = {() => { this.upsateTime()}}
                          >你的浏览器不支持喔！</audio>
                          <Player _this={this} albumImgUrl={albumImgUrl}  songname={songname} singer={singer}
                          duration={duration} currentTime={currentTime} played={played}/>
                          <IconButton color="primary" onClick={this.handleClick} className="song-lists-expand">
                            {open ? <ExpandMore /> : <ExpandLess />}
                          </IconButton >
                     </div>
                     <Collapse in={open} className="song-lists-wrapper">
                           {SongLists}
                           <DisList jsDisList={jsDisList} _this={this} value={value}/>
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