import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Nav from '../styled/nav'

import menu from '../../static/img/menu.svg'
import logo from '../../static/img/favicon.ico'

import {toggleMenu} from '../redux/actions/nav'
import {connect} from 'react-redux'

import PropTypes from 'prop-types'

class NavMenu extends Component {
    static get propTypes() { 
        return { 
            open: PropTypes.bool.isRequired, 
            toggleMenu: PropTypes.func.isRequired,
        }
    }

    render() {
        const {open,toggleMenu} = this.props
        console.log(open)
        console.log(toggleMenu)
        return (
            <Nav open={open}>
                <span className="logo">
                    <img src={logo} alt="React" title="React"/>
                </span>
                <a className="menu-svg" onClick={() => {toggleMenu()}}>
                   <img src={menu} />
                </a>
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
    open: state.getIn(['global','nav','open'])
})

const mapDispatchToProps = (dispatch) => {
    return {
        toggleMenu: () => {
            dispatch(toggleMenu())
        }
    }
}




export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavMenu)