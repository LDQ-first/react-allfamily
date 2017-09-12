import React, { Component } from 'react'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import ListSubheader from 'material-ui/List/ListSubheader'
import AudiotrackIcon from 'material-ui-icons/Audiotrack'
import PropTypes from 'prop-types'
import classNames from 'classnames'



export default class DisList extends Component {
    static get propTypes() { 
        return { 
            jsDisList: PropTypes.array,
            _this: PropTypes.object,
        }
    }

    constructor (props) {
        super(props)
        this.state = {
            clickI: 0
        }
    }

    
    componentWillReceiveProps(nextProps) {
        const { clickI } = this.state
        console.log('clickI: ', clickI)
        this.setState({
            clickI : 0
        })
        const scrollTimer = setInterval(() => {
            if(this._disListsWrapper.scrollTop === 0 ) {
                clearInterval(scrollTimer)
            }
            else {
                this._disListsWrapper.scrollTop -= this._disListsWrapper.scrollTop * 0.2
            }
        }, 150)
    }
    

    chooseSong (index, list) {
        const { _this} = this.props
        const { clickI } = this.state
        this.setState({
            clickI : index
        })
        _this.playSong(list)
    }
    


    render() {

        const {jsDisList, _this} = this.props
        const { clickI } = this.state 
        const className = (index) => {
            return classNames("disList", {'active': index === clickI})
        } 

        const disLists = jsDisList.map((list, index) => {
            return (
                <ListItem key={index} className={className(index)} button 
                ref={list => this._dislist = list}
                onClick={() => { 
                    this.chooseSong(index, list)
                }}>
                    <span className="disList-cur"></span>
                    <ListItemIcon>
                        <AudiotrackIcon />
                    </ListItemIcon>
                    <ListItemText inset disableTypography primary={
                        <div className="disList-content">
                            <h3 className="disList-title">{list.songname}</h3>
                            <h4 className="disList-subtitle">{list.singer} - {list.albumname}</h4>
                        </div>
                    } />
                </ListItem>
            )
        })


        return (
            <List className="disLists" 
            subheader={<ListSubheader className="disLists-header">歌曲列表 ( 共 {jsDisList.length} 首 )</ListSubheader>}>
                <div className="disLists-wrapper" 
                ref={wrapper => this._disListsWrapper = wrapper}>
                    {disLists}
                </div>
            </List>
        )
    }
}
