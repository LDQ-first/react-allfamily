import React from 'react'

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import { CSSTransition , TransitionGroup} from 'react-transition-group'
import { ConnectedRouter } from 'react-router-redux'

import Bundle from './bundle'
import Loading from '../components/Loading/Loading'

import Home from 'bundle-loader?lazy&name=home!../views/Home/Home'
import Page1 from 'bundle-loader?lazy&name=page1!../views/Page1/Page1'
import Counter from 'bundle-loader?lazy&name=counter!../views/Counter/Counter'
import UserInfo from 'bundle-loader?lazy&name=userInfo!../views/UserInfo/UserInfo'
import NotFound from 'bundle-loader?lazy&name=notFound!../views/NotFound/NotFound'
import Github from 'bundle-loader?lazy&name=github!../views/Github/Github'
import Music from 'bundle-loader?lazy&name=music!../views/Music/Music'


import NavMenu from './nav'


import createHistory from 'history/createHashHistory'


import {home, page1, counter, userinfo, github, music} from './link.js'


import {Container} from '../styled/index.js'




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
       <Route render={({ location }) => (  
        <div>
            <NavMenu></NavMenu>  
             <TransitionGroup>
                <CSSTransition
                     classNames="fade"
                     enter = {true}
                     exit = {true}
                     timeout={{ enter: 5000, exit: 3000 }}
                   >
                <Switch key={location.key}>     
                    <Route location={location}  exact path={home} component={createComponent(Home)}/>
                    <Route location={location}  path={`${page1}/:id`} component={createComponent(Page1)}/>
                    <Route location={location}  path={page1} component={createComponent(Page1)}/>
                    <Route location={location}  path={counter} component={createComponent(Counter)}/>
                    <Route location={location}  path={userinfo} component={createComponent(UserInfo)}/>
                    <Route location={location}  path={github} component={createComponent(Github)}/>
                    <Route location={location}  path={music} component={createComponent(Music)}/>
                    <Route location={location}  component={createComponent(NotFound)}/>
                </Switch>
                </CSSTransition>
             </TransitionGroup>
        </div>
       )} />
    </ConnectedRouter>
)
export default getRouter
