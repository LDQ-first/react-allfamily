import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Nav from '../styled/nav'

import menu from '../../static/img/menu.svg'
import logo from '../../static/img/favicon.ico'

import {taggleMenu} from '../redux/actions/nav'
import {connect} from 'react-redux'

class NavMenu extends Component {
    render() {
        const {open,toggleMenu} = this.props
        console.log(this.props)
        return (
            <Nav open={open}>
                <span className="logo">
                    <img src={logo} alt="React" title="React"/>
                </span>
                <a className="menu-svg" onClick={() => {toggleMenu()}}>
                   <img src={menu} />
                </a>
                <ul className="menu-list" onClick={() => {toggleMenu()}}>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/page1">Page1</Link></li>
                    <li><Link to="/counter">Counter</Link></li>
                    <li><Link to="/userinfo">UserInfo</Link></li>
                </ul>
            </Nav>
        )
    }
}


const mapStateToProps = (state) => ({
    open: state.nav.open
})

const mapDispatchToProps = (dispatch) => {
    return {
        toggleMenu: () => {
            dispatch(taggleMenu())
        }
    }
}




export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavMenu)