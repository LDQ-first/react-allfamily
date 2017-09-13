import React, { Component } from 'react'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import ListSubheader from 'material-ui/List/ListSubheader'
import AudiotrackIcon from 'material-ui-icons/Audiotrack'
import PlayCircleOutlineIcon from 'material-ui-icons/PlayCircleOutline'
import PauseCircleOutlineIcon from 'material-ui-icons/PauseCircleOutline'
import SkipNextIcon from 'material-ui-icons/SkipNext'
import SkipPreviousIcon from 'material-ui-icons/SkipPrevious'
import LoopIcon from 'material-ui-icons/Loop'
import VolumeDownIcon from 'material-ui-icons/VolumeDown'
import VolumeOffIcon from 'material-ui-icons/VolumeOff'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import IconButton from 'material-ui/IconButton'
import Lyric from '../Lyric/Lyric.js'
import { FormControlLabel } from 'material-ui/Form'
import Switch from 'material-ui/Switch'

export default class Player extends Component {
    static get propTypes() { 
        return { 
            _this: PropTypes.object,
            albumImgUrl: PropTypes.string,
            songname: PropTypes.string,
            singer: PropTypes.string,
            currentTime: PropTypes.string,
            duration: PropTypes.string,
            played: PropTypes.number,
            loaded: PropTypes.number,
            isAutoPlay: PropTypes.bool,
            volume: PropTypes.volume,
            isMuted: PropTypes.bool,
            lyric: PropTypes.string,
            currentSTime: PropTypes.number,
            isNewLyric: PropTypes.bool,

            isPlaying: PropTypes.bool,
            songIndex: PropTypes.number,
            play: PropTypes.func,
            pause: PropTypes.func,
            beforeSong: PropTypes.func,
            nextSong: PropTypes.func,
            chooseSong: PropTypes.func,
        }
    }

    constructor (props) {
        super(props)
        this.state = {
           /*isPlay: false,*/
           isMute: false,
           mode: 'loop',
           loaded: 0,
           played: 0
        }
    }


    
    
    

    
    componentWillReceiveProps(nextProps) {
       const {  played,loaded, isPlaying, _this, isAutoPlay, volume, isMuted, lyric} = nextProps
    /*   const {isPlay} = this.state*/
    /*   console.log(lyric)*/

       this.setState({
           played ,
           loaded
       })

       /*if(!isAutoPlay && isPlay && !isPlaying) {
           this.setState({
                isPlay: false
            })
       } 
       if(isAutoPlay && !isPlay && isPlaying) {
           this.setState({
                isPlay: true
            })
       } */
       if(isMuted || volume === 0) {
           this.setState({
               isMute: true
           })
       } else if(!isMuted || volume > 0){
           this.setState({
               isMute: false
           })
       }

    }

    


    

    play (_this) {
        /*this.setState({
            isPlay: true
        })*/
        _this.playSong()
    }

    pause (_this) {
        /*this.setState({
            isPlay: false
        })*/
        _this.pauseSong()
    }
   
    mutePlayer (_this) {
        const {isMute} = this.state
        this.setState({
            isMute: !isMute
        })
        _this.mutePlayer()
    }
    


    render() {

        const {_this, albumImgUrl, songname, singer, currentTime, duration, isAutoPlay, volume, lyric, currentSTime, isNewLyric,
              isPlaying} = this.props
        const {mode, isMute, loaded, played} = this.state


        return (
            <div className="player" >
                <div className="player-pic">
                    <div className="player-disco-wrapper">
                        <div className={classNames('player-needle', {active: isPlaying})}></div>
                        <div className={classNames('player-disco', {active: isPlaying})}>
                             <div className="player-disco-cover"></div>
                             <div className="player-disco-img" 
                                style={{background: `url(${albumImgUrl}) center/ cover no-repeat`}}>
                             </div>
                         </div>
                    </div>
                </div>
                <div className="player-info">
                    <header className="player-info-header">
                        <div className="player-info-title">
                            <h3 className="player-info-song">{songname}</h3>
                            <h4 className="player-info-singer"> - {singer}</h4>
                        </div>
                        <div className="player-info-header-control">
                             <FormControlLabel
                               className="player-info-formControlLabel"
                               color="primary"
                                control={
                                    <Switch 
                                    className="player-info-switch"
                                    checked={isAutoPlay}
                                    onChange={(event, isAutoPlay) => _this.toggleAutoPlay(isAutoPlay)}
                                    />
                                }
                                label="自动播放"
                              />
                        </div>
                       
                    </header>
                    {/*<Lyric _this={this} lyric={lyric} currentSTime={currentSTime} isNewLyric={isNewLyric}/>*/}
                    <footer className="player-info-control">
                        <div className="player-bar-wrapper">
                            <div className="player-bar"
                            ref={bar => this.bar = bar}>
                                <div className="player-loaded" 
                                style={{width: `${ loaded * 100 }%`}}></div>
                                <div className="player-played"
                                style={{width: `${ played * 100 }%`}}>
                                    <span className="player-played-thumb"></span>
                                </div>
                                
                            </div>
                        </div>
                        <div className="player-changeSong-wrapper">
                            <div className="player-changeSong">
                                <IconButton color="primary" aria-label="before" 
                                    className={classNames('iconBtn', "player-changeSong-btn","player-changeSong-btn-before")}  
                                    onClick = {() => {_this.changeSong('before')}}>
                                        <SkipPreviousIcon  /> 
                                </IconButton>
                                { 
                                isPlaying ?  
                                    <IconButton color="primary" aria-label="play" 
                                        className={classNames('iconBtn', "player-btn","player-btn-pause")}  
                                        onClick = {() => {this.pause(_this)}}>
                                            <PauseCircleOutlineIcon  /> 
                                    </IconButton> : 
                                    <IconButton color="primary" aria-label="play" 
                                        className={classNames('iconBtn', "player-btn","player-btn-paly")}
                                        onClick = {() => {this.play(_this)}}>
                                            <PlayCircleOutlineIcon  />
                                    </IconButton>
                                }
                                <IconButton color="primary" aria-label="next" 
                                    className={classNames('iconBtn', "player-changeSong-btn","player-changeSong-btn-next")}  
                                    onClick = {() => {_this.changeSong('next')}}>
                                        <SkipNextIcon  /> 
                                </IconButton>
                            </div>
                        </div>
                        <div className="player-time">
                            <span className="player-ctime">{currentTime}</span> / 
                            <span className="player-dtime">{duration}</span>
                        </div>
                        <div className="player-volume-wrapper">
                            <div className="player-volume">
                                { 
                                    isMute ? 
                                    <IconButton className="iconBtn" onClick={() => {this.mutePlayer(_this)}}>
                                        <VolumeOffIcon/>
                                    </IconButton> : 
                                    <IconButton className="iconBtn" onClick={() => {this.mutePlayer(_this)}}>
                                        <VolumeDownIcon/>
                                    </IconButton> 
                               }
                               <div className="player-volume-bar-wrap">
                                   <div className="player-volume-bar">
                                       <div className="aplayer-volume" 
                                       style={{height: `${volume * 100}%`}}></div>
                                   </div>
                               </div>
                            </div>
                        </div>
                        <div className="player-mode" onClick={() => {}}>
                            <IconButton className="iconBtn" onClick={() => {}}>
                                {mode === 'loop' && <LoopIcon/>} 
                            </IconButton>
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}
