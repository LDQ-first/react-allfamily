import React, { Component } from 'react'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import ListSubheader from 'material-ui/List/ListSubheader'
import AudiotrackIcon from 'material-ui-icons/Audiotrack'
import PlayCircleOutlineIcon from 'material-ui-icons/PlayCircleOutline'
import PauseCircleOutlineIcon from 'material-ui-icons/PauseCircleOutline'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import IconButton from 'material-ui/IconButton'



export default class Lyric extends Component {
    static get propTypes() { 
        return { 
            _this: PropTypes.object,
            
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
       
    }

    pause (_this) {
        this.setState({
            isPlay: false
        })
       
    }
    


    render() {

        const {_this} = this.props
        const {isPlay} = this.state

        return (
            <div className="player-info-lyric">
                
            </div>
        )
    }
}
