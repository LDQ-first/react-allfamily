import React, { Component } from 'react'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import ListSubheader from 'material-ui/List/ListSubheader'
import AudiotrackIcon from 'material-ui-icons/Audiotrack'
import PlayCircleOutlineIcon from 'material-ui-icons/PlayCircleOutline'
import PauseCircleOutlineIcon from 'material-ui-icons/PauseCircleOutline'
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
            isPlaying: PropTypes.bool,
        }
    }

    constructor (props) {
        super(props)
        this.state = {
           isPlay: false,
           isMute: false,
           mode: 'loop',
           loaded: 0,
           played: 0
        }
    }

    
    componentWillReceiveProps(nextProps) {
       const { currentTime, duration, played,loaded, isPlaying, _this, isAutoPlay} = this.props
       const {isPlay} = this.state
       this.setState({
           played ,
           loaded
       })
      /* console.log(isPlay)*/
       if(!isAutoPlay && isPlay && !isPlaying) {
           this.setState({
                isPlay: false
            })
       } 
       if(isAutoPlay && !isPlay && isPlaying) {
           this.setState({
                isPlay: true
            })
       } 
    }

    


    

    play (_this) {
        this.setState({
            isPlay: true
        })
        _this.playSong()
    }

    pause (_this) {
        this.setState({
            isPlay: false
        })
        _this.pauseSong()
    }
   
    


    render() {

        const {_this, albumImgUrl, songname, singer, currentTime, duration, isAutoPlay} = this.props
        const {isPlay, mode, isMute, loaded, played} = this.state




        return (
            <div className="player" >
                <div className="player-pic" style={{background: `url(${albumImgUrl}) no-repeat center/cover`}}>
                   { 
                       isPlay ?  
                        <IconButton color="primary" aria-label="play" 
                            className={classNames("player-btn","player-btn-pause")}  
                            onClick = {() => {this.pause(_this)}}>
                                <PauseCircleOutlineIcon  /> 
                        </IconButton> : 
                        <IconButton color="primary" aria-label="play" 
                            className={classNames("player-btn","player-btn-paly")}
                            onClick = {() => {this.play(_this)}}>
                                <PlayCircleOutlineIcon  />
                        </IconButton>
                    }
                    <div className="player-pic-shade" ></div>
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
                    <Lyric />
                    <footer className="player-info-control">
                        <div className="player-bar-wrapper">
                            <div className="player-bar">
                                <div className="player-loaded" 
                                style={{transform: `scaleX(${loaded})`}}></div>
                                <div className="player-played"
                                style={{transform: `scaleX(${played})`}}></div>
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
                                    <IconButton className="iconBtn" onClick={() => {}}>
                                        <VolumeOffIcon/>
                                    </IconButton> : 
                                    <IconButton className="iconBtn" onClick={() => {}}>
                                        <VolumeDownIcon/>
                                    </IconButton> 
                               }
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
