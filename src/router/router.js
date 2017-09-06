import React from 'react'

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

import Home from '../views/Home/Home'
import Page1 from '../views/Page1/Page1'
import Counter from '../views/Counter/Counter'
import UserInfo from '../views/UserInfo/UserInfo'

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
                <Route exact path='/' component={Home}/>
                <Route path='/page1' component={Page1}/>
                <Route path='/counter' component={Counter}/>
                <Route path="/userinfo" component={UserInfo}/>
            </Switch>
        </div>
    </Router>
)

export default getRouter
