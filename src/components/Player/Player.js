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

            volume: PropTypes.volume,
            
            lyric: PropTypes.string,
            currentSTime: PropTypes.number,
            

            isPlaying: PropTypes.bool,
            isAutoplay: PropTypes.bool,
            isMuted: PropTypes.bool,
            songIndex: PropTypes.number,
            isChanged: PropTypes.bool,

            beforeSong: PropTypes.func,
            nextSong: PropTypes.func,
            chooseSong: PropTypes.func,
        }
    }

    constructor (props) {
        super(props)
        this.state = {
           mode: 'loop',
           loaded: 0,
           played: 0
        }
    }


    
    
    

    
    componentWillReceiveProps(nextProps) {
       const {  played,loaded, isPlaying, _this, isAutoplay, volume, isMuted, lyric} = nextProps


       this.setState({
           played ,
           loaded
       })


    }



    render() {

        const {_this, albumImgUrl, songname, singer, currentTime, duration, isAutoplay, volume, lyric, currentSTime,
              isPlaying, isMuted, isChanged} = this.props
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
                                    checked={isAutoplay}
                                    onChange={(event) => _this.toggleAutoPlay()}
                                    />
                                }
                                label="自动播放"
                              />
                        </div>
                       
                    </header>
                    <Lyric _this={this} lyric={lyric} currentSTime={currentSTime} isChanged={isChanged}/>
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
                                        onClick = {() => {_this.pauseSong()}}>
                                            <PauseCircleOutlineIcon  /> 
                                    </IconButton> : 
                                    <IconButton color="primary" aria-label="play" 
                                        className={classNames('iconBtn', "player-btn","player-btn-paly")}
                                        onClick = {() => {_this.playSong()}}>
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
                                    isMuted ? 
                                    <IconButton className="iconBtn" onClick={() => {_this.mutePlayer()}}>
                                        <VolumeOffIcon/>
                                    </IconButton> : 
                                    <IconButton className="iconBtn" onClick={() => {_this.mutePlayer()}}>
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
