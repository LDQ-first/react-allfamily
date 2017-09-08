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

class NavMenu extends Component {
    static get propTypes() { 
        return { 
            open: PropTypes.bool.isRequired, 
            toggleMenu: PropTypes.func.isRequired
        }
    }

    render() {
        const { open,toggleMenu } = this.props
        console.log(open)
        console.log(toggleMenu)
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
                <ul className="menu-list" onClick={() => {toggleMenu()}}>
                    <li className="menu-item"><Link to="/">首页</Link></li>
                    <li className="menu-item"><Link to="/page1">Page1</Link></li>
                    <li className="menu-item"><Link to="/counter">Counter</Link></li>
                    <li className="menu-item"><Link to="/userinfo">UserInfo</Link></li>
                </ul>
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