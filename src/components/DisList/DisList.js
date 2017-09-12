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


    
    componentWillMount() {
        const {jsDisList} = this.props
        
    }
    


    render() {

        const {jsDisList, _this} = this.props
        let clickI = 0
        const className = (index) => {
            console.log(index)
            return classNames("disList", {'active': index === clickI})
        } 

        const disLists = jsDisList.map((list, index) => {
            return (
                <ListItem key={index} className={className(index)} button 
                ref={list => this._dislist = list}
                onClick={() => { 
                    clickI = index
                    console.log(clickI)
                    className(index)
               //     this._dislist.classList.add('active') 
                    _this.playSong(list)
                }}>
                    <span className="disList-cur"></span>
                    <ListItemIcon>
                        <AudiotrackIcon />
                    </ListItemIcon>
                    <ListItemText inset primary="Sent mail" />
                </ListItem>
            )
        })


        return (
            <List className="disLists" 
            subheader={<ListSubheader className="disLists-header">歌曲列表 ( 共 {jsDisList.length} 首 )</ListSubheader>}>
                <div className="disLists-wrapper">
                    {disLists}
                </div>
            </List>
        )
    }
}
