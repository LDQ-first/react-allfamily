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
            lyric: PropTypes.string,
            currentSTime: PropTypes.number
        }
    }

    constructor (props) {
        super(props)
        this.state = {
           isPlay: false,
           index: 0,
        }
    }

    
    componentWillReceiveProps(nextProps) {
       const {_this, lyric} = nextProps
       

    }


    formatText(text) {
        const div = document.createElement('div')
        div.innerHTML = text
        return div.innerText
    }

    getSeconds(line) {
        return +line.replace(/^\[(\d{2}):(\d{2}).*/, (match, p1, p2) => 60 * (+p1) + (+p2))
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


    componentDidUpdate(prevProps, prevState) {
        
    }
    
    


    render() {

        const {_this, lyric, currentSTime} = this.props
        const {isPlay, index} = this.state
        console.log(currentSTime)

        let lines = null
        if(lyric) {
           const newLyric = this.formatText(lyric)
           console.log(newLyric)
           console.log(this.lines)
           const newLyricArray = newLyric.match(/^\[\d{2}:\d{2}.\d{2}\](.+)$/gm) || []
           console.log(newLyricArray)

           if(newLyricArray.length) {
               lines = newLyricArray.map((line, i) => {
                    return (
                        <div key={i} className="player-lyrics-line"
                        ref={line => this.line = line}>{line.slice(10)}</div>
                    )
                })
                lines.map((line, i) => {
                    line.props.className = line.props.className.replace(' active', '')
                    console.log(line.props.className)
                })
                lines[index].props.className += ' active'
                console.log(lines)
           }
           
           
        }





        return (
            <div className="player-info-lyric">
                <div className="player-lyrics-lines"
                ref={lines => this.lines = lines}
                style={{transform: `translateY(0px)`}}>
                    {lines}
                </div>
            </div>
        )
    }
}
