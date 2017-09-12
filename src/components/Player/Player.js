import React, { Component } from 'react'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import ListSubheader from 'material-ui/List/ListSubheader'
import AudiotrackIcon from 'material-ui-icons/Audiotrack'
import PlayCircleOutlineIcon from 'material-ui-icons/PlayCircleOutline'
import PauseCircleOutlineIcon from 'material-ui-icons/PauseCircleOutline'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import IconButton from 'material-ui/IconButton'
import Lyric from '../Lyric/Lyric.js'


export default class Player extends Component {
    static get propTypes() { 
        return { 
            _this: PropTypes.object,
            albumImgUrl: PropTypes.string
        }
    }

    constructor (props) {
        super(props)
        this.state = {
           isPlay: false
        }
    }

    
    componentWillReceiveProps(nextProps) {
       
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

        const {_this, albumImgUrl} = this.props
        const {isPlay} = this.state

        return (
            <div className="player" >
                <div className="player-pic" style={{background: `url(${albumImgUrl}) no-repeat center/cover`}}>
                   { isPlay ?  <IconButton color="primary" aria-label="play" 
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
                        <h3 className="player-info-song">歌名</h3>
                        <h4 className="player-info-singer"> - 歌手</h4>
                    </header>
                    <Lyric />
                    <footer className="player-info-control">
                        
                    </footer>
                </div>
            </div>
        )
    }
}
