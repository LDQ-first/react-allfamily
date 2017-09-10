import React, { Component } from 'react'
import List, { ListItem, ListItemText } from 'material-ui/List'
import PropTypes from 'prop-types'
import LinkIcon from 'material-ui-icons/Link'
import IconButton from 'material-ui/IconButton'
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation'
import StarIcon from 'material-ui-icons/Star'
import ContentCopyIcon from 'material-ui-icons/ContentCopy'
import AlarmAddIcon from 'material-ui-icons/AlarmAdd'
import AlarmOnIcon from 'material-ui-icons/AlarmOn'
import Button from 'material-ui/Button'
import ErrorIcon from 'material-ui-icons/Error'
import {formatTime} from '../../utils/'
import clipboard from 'clipboard-js'



export default class ReposLists extends Component {
     static get propTypes() { 
        return { 
            list: PropTypes.object.isRequired
        }
    }

    copy(url) {
        clipboard.copy(url.innerText)
    }

    render() {
       const {list} = this.props


        return (
              <ListItem className="list-item">
                    <header className="repo-header">
                        <h2 className="repo-name">{list.name}</h2>
                        <h3 className="repo-description">{list.description}</h3>
                    </header>
                    <article className="repo-content">
                         <List className="content-list">
                            <ListItem  className="content-list-item">
                                <LinkIcon className="content-list-icon"/>
                                <div className="content-list-main">
                                    <h3 className="content-list-title">gitUrl</h3>
                                    <span className="content-list-url" ref={url => this.gitUrl = url}>{list.gitUrl}</span>    
                                </div>                 
                                <IconButton onClick={() => {
                                    this.copy(this.gitUrl)
                                }} className="content-list-btn" color="blue" aria-label=""><ContentCopyIcon/></IconButton>  
                            </ListItem>
                            <ListItem  className="content-list-item">
                                <LinkIcon className="content-list-icon"/>
                                <div className="content-list-main">
                                    <h3 className="content-list-title">sshUrl</h3>
                                    <span className="content-list-url" ref={url => this.sshUrl = url}>{list.sshUrl}</span>    
                                </div>                 
                                <IconButton  onClick={() => {
                                    this.copy(this.sshUrl)
                                }} className="content-list-btn" color="blue" aria-label=""><ContentCopyIcon/></IconButton>  
                            </ListItem>
                            <ListItem   className="content-list-item">
                                <LinkIcon className="content-list-icon"/>
                                <div className="content-list-main">
                                    <h3 className="content-list-title">cloneUrl</h3>
                                    <span className="content-list-url" ref={url => this.cloneUrl = url}>{list.cloneUrl}</span>    
                                </div>                 
                                <IconButton onClick={() => {
                                    this.copy(this.cloneUrl)
                                }} className="content-list-btn" color="blue" aria-label=""><ContentCopyIcon/></IconButton>  
                            </ListItem>
                            <ListItem   className="content-list-item">
                                <LinkIcon className="content-list-icon"/>
                                <div className="content-list-main">
                                    <h3 className="content-list-title">svnUrl</h3>
                                    <span className="content-list-url" ref={url => this.svnUrl = url}>{list.svnUrl}</span>    
                                </div>                 
                                <IconButton onClick={() => {
                                    this.copy(this.svnUrl)
                                }} className="content-list-btn" color="blue" aria-label=""><ContentCopyIcon /></IconButton>  
                            </ListItem>
                         </List>
                         <BottomNavigation className="content-list-data" showLabels>
                            <BottomNavigationButton label={list.stargazersCount} icon={< StarIcon/>} />
                            <BottomNavigationButton label={list.forksCount} icon={
                                <svg className="icon" aria-hidden="true" style={{ width:'24px', height: '24px'}}>
                                    <use xlinkHref="#icon-repo-forked1"></use>
                                </svg>
                            } />
                            <BottomNavigationButton label={list.openIssuesCount} icon={< ErrorIcon/>} />
                        </BottomNavigation>
                        <Button href={list.githubUrl} target="_blank" className="githubUrl">
                            <svg className="icon item-icon" aria-hidden="true">
                                <use xlinkHref="#icon-github"></use>
                            </svg>
                            <h4>查看{list.name}的Github</h4>
                        </Button>
                    </article>
                    <footer className="repo-footer">
                        <span className="createdAt repo-footer-item">
                            <AlarmAddIcon className="footer-icon"/>
                            <h4 className="footer-title">{formatTime(list.createdAt)}</h4>
                        </span>
                        <span className="updatedAt repo-footer-item">
                           <AlarmOnIcon className="footer-icon"/>
                           <h4 className="footer-title">{formatTime(list.updatedAt)}</h4> 
                        </span>
                    </footer>
                </ListItem>
        )
    }
}
