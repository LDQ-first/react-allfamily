import React from 'react'

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

import Bundle from './bundle'
import Loading from '../components/Loading/Loading'

import Home from 'bundle-loader?lazy&name=home!../views/Home/Home'
import Page1 from 'bundle-loader?lazy&name=page1!../views/Page1/Page1'
import Counter from 'bundle-loader?lazy&name=counter!../views/Counter/Counter'
import UserInfo from 'bundle-loader?lazy&name=userInfo!../views/UserInfo/UserInfo'


const createComponent = (component) => () => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component/> : <Loading/>
        }
    </Bundle>
)

const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">Page1</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/userinfo">UserInfo</Link></li>
            </ul>

            <Switch>
                <Route exact path='/' component={createComponent(Home)}/>
                <Route path='/page1' component={createComponent(Page1)}/>
                <Route path='/counter' component={createComponent(Counter)}/>
                <Route path="/userinfo" component={createComponent(UserInfo)}/>
            </Switch>
        </div>
    </Router>
)
export default getRouter
