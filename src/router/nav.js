import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Nav from '../styled/nav'

import menu from '../../static/img/menu.svg'
import logo from '../../static/img/favicon.ico'

/*import {toggleMenu} from '../redux/actions/nav'*/
import * as navActions from '../redux/actions/nav'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { openSelector } from '../selector/nav'

import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import BottomNavLink from '../styled/BottomNavLink'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import FolderIcon from 'material-ui-icons/Folder'

class NavMenu extends Component {
    static get propTypes() { 
        return { 
            open: PropTypes.bool.isRequired, 
            toggleMenu: PropTypes.func.isRequired
        }
    }

    render() {
        const { open,toggleMenu } = this.props
        return (
            <Nav open={open}>
                <div className="control">
                     <Button color="contrast" className="logo">
                        <BottomNavLink  to="/">
                            <img src={logo} alt="React" title="React"/>
                        </BottomNavLink>
                    </Button>
                    <IconButton className="menu-svg" color="contrast" aria-label="Menu" 
                        onClick={() => {toggleMenu()}}>
                        <MenuIcon />
                    </IconButton>
                </div>
                <List className="menu-list" onClick={() => {toggleMenu()}}>  
                    <ListItem button className="menu-item">
                        <Avatar>
                            <FolderIcon className="list-icon"/>
                        </Avatar>
                        <Link to="/">
                            <ListItemText primary="首页" secondary="" />
                        </Link>
                    </ListItem>
                    <ListItem button className="menu-item">
                        <Avatar>
                            <FolderIcon className="list-icon"/>
                        </Avatar>
                        <Link to="/page1">
                            <ListItemText primary="Page1" secondary="" />
                        </Link>
                    </ListItem>
                    <ListItem button className="menu-item">
                        <Avatar>
                            <FolderIcon className="list-icon"/>
                        </Avatar>
                        <Link to="/counter">
                            <ListItemText primary="Counter" secondary="" />
                        </Link>
                    </ListItem>
                    <ListItem button className="menu-item">
                        <Avatar>
                            <FolderIcon className="list-icon"/>
                        </Avatar>
                        <Link to="/userinfo">
                            <ListItemText primary="UserInfo" secondary="" />
                        </Link>
                    </ListItem>
                    <ListItem button className="menu-item">
                        <Avatar>
                            <FolderIcon className="list-icon"/>
                        </Avatar>
                        <Link to="/github">
                            <ListItemText primary="Github" secondary="" />
                        </Link>
                    </ListItem>
                </List>
            </Nav>
        )
    }
}


const mapStateToProps = (state) => ({
    open: openSelector(state)
})

/*const mapDispatchToProps = (dispatch) => {
    return {
        toggleMenu: () => {
            dispatch(toggleMenu())
        }
    }
}
*/



export default connect(
    mapStateToProps,
    navActions
)(NavMenu)