import React, { Component } from 'react'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import ListSubheader from 'material-ui/List/ListSubheader'
import AudiotrackIcon from 'material-ui-icons/Audiotrack'
import PropTypes from 'prop-types'




export default class DisList extends Component {
    static get propTypes() { 
        return { 
            jsDisList: PropTypes.array,
        }
    }


    
    componentWillMount() {
        const {jsDisList} = this.props
        
    }
    


    render() {

        const {jsDisList} = this.props


        const disLists = jsDisList.map((list, index) => {
            return (
                <ListItem key={index}>
                    <ListItemIcon>
                        <AudiotrackIcon />
                    </ListItemIcon>
                    <ListItemText inset primary="Sent mail" />
                </ListItem>
            )
        })


        return (
            <List  subheader={<ListSubheader>歌曲列表</ListSubheader>}>
                {disLists}
            </List>
        )
    }
}
