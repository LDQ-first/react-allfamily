import React from 'react'

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import Bundle from './bundle'
import Loading from '../components/Loading/Loading'

import Home from 'bundle-loader?lazy&name=home!../views/Home/Home'
import Page1 from 'bundle-loader?lazy&name=page1!../views/Page1/Page1'
import Counter from 'bundle-loader?lazy&name=counter!../views/Counter/Counter'
import UserInfo from 'bundle-loader?lazy&name=userInfo!../views/UserInfo/UserInfo'
import NotFound from 'bundle-loader?lazy&name=notFound!../views/NotFound/NotFound'
import Github from 'bundle-loader?lazy&name=github!../views/Github/Github'


import NavMenu from './nav'


import createHistory from 'history/createBrowserHistory'

const createComponent = (component) => () => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component/> : <Loading/>
        }
    </Bundle>
)

let open = false

const getRouter = () => (
    <ConnectedRouter history={createHistory()}>
        <div>
            <NavMenu></NavMenu>
            <Switch>
                <Route exact path='/' component={createComponent(Home)}/>
                <Route path='/page1' component={createComponent(Page1)}/>
                <Route path='/counter' component={createComponent(Counter)}/>
                <Route path="/userinfo" component={createComponent(UserInfo)}/>
                <Route path="/github" component={createComponent(Github)}/>
                <Route component={createComponent(NotFound)}/>
            </Switch>
        </div>
    </ConnectedRouter>
)
export default getRouter
