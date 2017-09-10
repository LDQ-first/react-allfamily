import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { GithubUserDiv } from '../../styled/Github'
import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton'
import Search from 'material-ui-icons/search'
import SearchCom from '../../components/Search/Search'
import * as githubUserInfoActions  from '../../redux/actions/githubUser'
import {connect} from 'react-redux'
import Progress from '../../components/Loading/progress'
import {formatTime} from '../../utils/'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import BusinessIcon from 'material-ui-icons/Business'
import ModeEditIcon from 'material-ui-icons/ModeEdit'
import LocationOnIcon from 'material-ui-icons/LocationOn'
import ReorderIcon from 'material-ui-icons/Reorder'
import StarIcon from 'material-ui-icons/Star'
import PersonAddIcon from 'material-ui-icons/PersonAdd'
import AlarmAddIcon from 'material-ui-icons/AlarmAdd'
import AlarmOnIcon from 'material-ui-icons/AlarmOn'
import ListIcon from 'material-ui-icons/List'
import LinkIcon from 'material-ui-icons/Link'
import ContentCopyIcon from 'material-ui-icons/ContentCopy'
import ErrorIcon from 'material-ui-icons/Error'
import CallSplitIcon from 'material-ui-icons/CallSplit'
import Button from 'material-ui/Button'
import Img from '../../components/Img/Img'
import Immutable from 'immutable'
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation'
import Error from '../../components/Error/Error.js'
import ReposLists from '../../components/ReposLists/ReposLists.js'


import {
    isLoadingSelector,
    errorMsgSelector,
    statusSelector,
    nameSelector,
    loginSelector,
    avatarSelector,
    createdAtSelector,
    updatedAtSelector,
    githubUrlSelector,
    publicReposSelector,
    publicGistsSelector,
    followersSelector,
    followingSelector,
    companySelector,
    blogSelector,
    locationSelector,
    bioSelector,
    ReposSelector
} from '../../selector/githubUser'


const mapStateToProps = (state) => ({
    isLoading: isLoadingSelector(state),
    errorMsg: errorMsgSelector(state),   
    status: statusSelector(state),
    name: nameSelector(state),  
    login: loginSelector(state),
    avatar: avatarSelector(state),
    createdAt: createdAtSelector(state),
    updatedAt: updatedAtSelector(state),
    githubUrl: githubUrlSelector(state),
    publicRepos: publicReposSelector(state),
    followers: followersSelector(state),
    following: followingSelector(state),
    company: companySelector(state),
    blog: blogSelector(state),
    location: locationSelector(state),
    bio: bioSelector(state),
    Repos: ReposSelector(state)
})


class GithubUser extends Component {
    static get propTypes() { 
        return { 
            isLoading: PropTypes.bool.isRequired,
            errorMsg: PropTypes.string.isRequired,
            getGithubUser: PropTypes.func.isRequired,
            status: PropTypes.number.isRequired,
            name: PropTypes.string,
            login: PropTypes.string,
            avatar: PropTypes.string,
            createdAt: PropTypes.string,
            updatedAt: PropTypes.string,
            githubUrl: PropTypes.string,
            reposUrl: PropTypes.string,
            company: PropTypes.string,
            blog: PropTypes.string,
            location: PropTypes.string,
            bio: PropTypes.string,
            publicRepos: PropTypes.number,
            followers: PropTypes.number,
            following: PropTypes.number,
            Repos: PropTypes.array
        }
    }

    

    constructor (props) {
        super(props)

        const {company, blog ,location, bio, publicRepos,
              followers ,following, Repos} = this.props
        let { createdAt, updatedAt } = this.props
         createdAt = formatTime(createdAt)
         updatedAt = formatTime(updatedAt)
          const jsRepos = Immutable.List(Repos).toJS()

        this.state = {
            userLists : [
                { item: company, title: '公司' ,icon: <BusinessIcon className="list-icon"/> },
                { item: <a className="link" href={blog} target="_blank">博客</a>, title: '博客' ,icon: <ModeEditIcon className="list-icon" /> },
                { item: location, title: '地址' ,icon: <LocationOnIcon className="list-icon"/> },
                { item: publicRepos, title: '公开仓库数' ,icon: <ReorderIcon className="list-icon"/> },
                { item: followers, title: '粉丝数' ,icon: <PersonAddIcon className="list-icon"/> },
                { item: following, title: '关注数' ,icon: <StarIcon className="list-icon"/> },
                { item: createdAt, title: '创建时间' ,icon: <AlarmAddIcon className="list-icon"/> },
                { item: updatedAt, title: '最近更新时间' ,icon: <AlarmOnIcon className="list-icon"/> }
            ],
            Repos: jsRepos
        }
        
    }
       
    
    componentWillReceiveProps (nextProps) {
         const {company, blog ,location, bio, publicRepos,
              followers ,following, Repos} = nextProps
         let { createdAt, updatedAt } = nextProps
         createdAt = formatTime(createdAt)
         updatedAt = formatTime(updatedAt)

        const userLists = [
                { item: company, title: '公司' ,icon: <BusinessIcon className="list-icon"/> },
                { item: <a className="link" href={blog} target="_blank">博客</a>, title: '博客' ,icon: <ModeEditIcon className="list-icon" /> },
                { item: location, title: '地址' ,icon: <LocationOnIcon className="list-icon"/> },
                { item: publicRepos, title: '公开仓库数' ,icon: <ReorderIcon className="list-icon"/> },
                { item: followers, title: '粉丝数' ,icon: <PersonAddIcon className="list-icon"/> },
                { item: following, title: '关注数' ,icon: <StarIcon className="list-icon"/> },
                { item: createdAt, title: '创建时间' ,icon: <AlarmAddIcon className="list-icon"/> },
                { item: updatedAt, title: '最近更新时间' ,icon: <AlarmOnIcon className="list-icon"/> }
            ]
        
         const jsRepos = Immutable.List(Repos).toJS()

        this.setState({
            userLists: userLists,
            Repos: jsRepos
        })

    }
    

    
    _searchUser (value) {
        console.log('value: ', value)
        if(value === '') {
            console.log(value)
            return
        }

        this.props.getGithubUser(value.trim())
    }

    _keySearch (e) {
        if(e.keyCode === 13) {
            const value = e.target.value
            this._searchUser(value)
        }
    }

    _iconSearch () {
        const value = this._search.value
        this._searchUser(value)
    }

    render() {
         const {isLoading, errorMsg, name, login, avatar, bio, githubUrl } = this.props

         const userList = this.state.userLists.map((list, index) => {
             return (
                 <ListItem  key={index} button className="list-item">
                    <Avatar className="item-icon">
                        {list.icon}
                    </Avatar>
                    <h3 className="item-title">
                        {list.title}: 
                    </h3>
                    <span className="item">
                        {list.item}
                    </span>
                </ListItem>
             )
         })

         const ReposList = this.state.Repos.map((list, index) => {
             return (
                 <ReposLists  key={index} list={list} />
             )
         })

         {/* <ListItem  key={index}  className="list-item">
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
                                    <span className="content-list-url">{list.gitUrl}</span>    
                                </div>                 
                                <IconButton className="content-list-btn" color="blue" aria-label=""><ContentCopyIcon/></IconButton>  
                            </ListItem>
                            <ListItem  className="content-list-item">
                                <LinkIcon className="content-list-icon"/>
                                <div className="content-list-main">
                                    <h3 className="content-list-title">sshUrl</h3>
                                    <span className="content-list-url">{list.sshUrl}</span>    
                                </div>                 
                                <IconButton className="content-list-btn" color="blue" aria-label=""><ContentCopyIcon/></IconButton>  
                            </ListItem>
                            <ListItem   className="content-list-item">
                                <LinkIcon className="content-list-icon"/>
                                <div className="content-list-main">
                                    <h3 className="content-list-title">cloneUrl</h3>
                                    <span className="content-list-url">{list.cloneUrl}</span>    
                                </div>                 
                                <IconButton className="content-list-btn" color="blue" aria-label=""><ContentCopyIcon/></IconButton>  
                            </ListItem>
                            <ListItem   className="content-list-item">
                                <LinkIcon className="content-list-icon"/>
                                <div className="content-list-main">
                                    <h3 className="content-list-title">svnUrl</h3>
                                    <span className="content-list-url">{list.svnUrl}</span>    
                                </div>                 
                                <IconButton className="content-list-btn" color="blue" aria-label=""><ContentCopyIcon /></IconButton>  
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
                </ListItem>*/}

        return (
            <GithubUserDiv className="githubUser">
                <h1 className="title">Find Github User</h1>
                {/*<section className="searchArea">
                    <TextField 
                        className = "search-input"  
                        label = "User"
                        InputProps = {{ placeholder: '请输入用户名（Please input username）' }}
                        helperText = "To Search User!"
                        margin = "normal"
                        onKeyDown = {(e) => {this._keySearch(e)}}
                        inputRef ={ search => this._search = search }
                    />
                    <span className="search-icon">  
                       <IconButton color="primary" aria-label="To Search User">
                            <Search onClick = {() => {this._iconSearch()}}/>
                       </IconButton>
                    </span>   
                </section>*/}
                <SearchCom
                     label = "User"
                     placeholder= '请输入用户名（Please input username）'
                     helperText = "To Search User!"
                     ariaLabel = "To Search User"
                     _this = {this}
                />
                {
                    isLoading ? <Progress/> : (
                        errorMsg ?  <Error errorMsg={errorMsg} /> : 
                        <div>
                            <header className="header">
                                <h2 className="name">{name}</h2>
                                <div className="intro">
                                    <div className="bio">
                                        <Img className="avatar" src={avatar} alt={name} title={name} />
                                        <h3 className="login">{login}</h3>
                                        <span className="bio">{bio}</span>
                                    </div>
                                    <List className="list" >
                                        {userList}
                                    </List>
                                </div>
                                <Button href={githubUrl} target="_blank" className="githubUrl">
                                    <svg className="icon item-icon" aria-hidden="true">
                                        <use xlinkHref="#icon-github"></use>
                                    </svg>
                                    <h4>查看{login}的Github</h4>
                                </Button>
                            </header>
                            <article className="main">
                                <header className="main-header">
                                    <ListIcon className="main-header-icon"/>
                                    <h2 className="main-header-title">仓库列表</h2>
                                </header>
                                <List className="repos">
                                    {ReposList}
                                </List>
                            </article>
                     </div>
                    )
                }
            </GithubUserDiv>
        )
    }
}




export default connect(
    mapStateToProps,
    githubUserInfoActions
)(GithubUser)