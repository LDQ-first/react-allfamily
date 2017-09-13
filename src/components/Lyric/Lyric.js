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
           translateY: 0,
        }
    }

    
    componentWillReceiveProps(nextProps) {
       const {_this, lyric} = nextProps
       const { index, translateY }  = this.state
       this.setState({
            index: 0,
            translateY: 0
        })

       let lines = null
       if(lyric) {
           const newLyric = this.formatText(lyric)
           /*console.log(newLyric)*/
           
           const newLyricArray = newLyric.match(/^\[\d{2}:\d{2}.\d{2}\](.+)$/gm) || []
           

           if(newLyricArray.length) {
               lines = newLyricArray.map((line, i) => {
                    return (
                        <div key={i} className="player-lyrics-line"
                        ref={line => this.line = line}>{line.slice(10)}</div>
                    )
                })
                lines.map((line, i) => {
                    line.props.className = line.props.className.replace(' active', '')
                  //  console.log(line.props.className)
                })
                lines[index].props.className += ' active'
               // console.log(lines)
               this.setState({
                   lines
               })
                this.update(newLyricArray, lines)
           } 
        }

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

    
    update (newLyricArray, lines) {
         const {lyric, currentSTime} = this.props
         const {index, translateY} = this.state
        /* console.log(this.lines)*/
         /*console.log(newLyricArray)
         console.log(lines)*/
         let newCurrentSTime = Math.round(currentSTime)
       //  console.log(newCurrentSTime)
         if(index === newLyricArray.length - 1) return

         for(let i = index + 1 ; i < newLyricArray.length ; i ++) {
             let sec = this.getSeconds(newLyricArray[i])
             
             /*if(newCurrentSTime === sec) {
                 console.log(sec)
             }*/
             if( newCurrentSTime === sec && 
             (!newLyricArray[i + 1] || newCurrentSTime < this.getSeconds(newLyricArray[i + 1]))) {
                 console.log(i)
                 lines.map((line, i) => {
                    line.props.className = line.props.className.replace(' active', '')
                  //  console.log(line.props.className)
                })
                lines[i].props.className += ' active'
                this.setState({
                    index: i
                })
                break;
             }
         }

         if(index > 2 && this.line) {
             console.log(index)
             
             this.setState({
                 translateY: -(index - 2) * this.line.offsetHeight
             }) 
         }



    }


    render() {

        const {_this, lyric, currentSTime} = this.props
        const {isPlay, index, translateY, lines} = this.state
        

       /* let lines = null
        if(lyric) {
           const newLyric = this.formatText(lyric)
          
           const newLyricArray = newLyric.match(/^\[\d{2}:\d{2}.\d{2}\](.+)$/gm) || []
           

           if(newLyricArray.length) {
               lines = newLyricArray.map((line, i) => {
                    return (
                        <div key={i} className="player-lyrics-line"
                        ref={line => this.line = line}>{line.slice(10)}</div>
                    )
                })
                lines.map((line, i) => {
                    line.props.className = line.props.className.replace(' active', '')
                })
                lines[index].props.className += ' active'
                this.update(newLyricArray, lines)
           }
           
           
        }*/





        return (
            <div className="player-info-lyric">
                <div className="player-lyrics-lines"
                ref={lines => this.lines = lines}
                style={{transform: `translateY(${translateY}px)`}}>
                    {lines}
                </div>
            </div>
        )
    }
}
