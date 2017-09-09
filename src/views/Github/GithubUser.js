import React, { Component } from 'react'
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
import EmailIcon from 'material-ui-icons/Email'
import BusinessIcon from 'material-ui-icons/Business'
import ModeEditIcon from 'material-ui-icons/ModeEdit'
import LocationOnIcon from 'material-ui-icons/LocationOn'
import ReorderIcon from 'material-ui-icons/Reorder'
import StarIcon from 'material-ui-icons/Star'
import PersonAddIcon from 'material-ui-icons/PersonAdd'
import Button from 'material-ui/Button'
import Img from '../../components/Img/Img'


import {
    isLoadingSelector,
    errorMsgSelector,
    nameSelector,
    loginSelector,
    avatarSelector,
    createdAtSelector,
    updatedAtSelector,
    githubUrlSelector,
    reposUrlSelector,
    publicReposSelector,
    publicGistsSelector,
    followersSelector,
    followingSelector,
    emailSelector,
    companySelector,
    blogSelector,
    locationSelector,
    bioSelector
} from '../../selector/githubUser'


const mapStateToProps = (state) => ({
    isLoading: isLoadingSelector(state),
    errorMsg: errorMsgSelector(state),   
    name: nameSelector(state),  
    login: loginSelector(state),
    avatar: avatarSelector(state),
    createdAt: createdAtSelector(state),
    updatedAt: updatedAtSelector(state),
    githubUrl: githubUrlSelector(state),
    reposUrl: reposUrlSelector(state),
    publicRepos: publicReposSelector(state),
    followers: followersSelector(state),
    following: followingSelector(state),
    email: emailSelector(state),
    company: companySelector(state),
    blog: blogSelector(state),
    location: locationSelector(state),
    bio: bioSelector(state)
})


class GithubUser extends Component {
    static get propTypes() { 
        return { 
            isLoading: PropTypes.bool.isRequired,
            errorMsg: PropTypes.string.isRequired,
            getGithubUser: PropTypes.func.isRequired,
            name: PropTypes.string,
            login: PropTypes.string,
            avatar: PropTypes.string,
            createdAt: PropTypes.string,
            updatedAt: PropTypes.string,
            githubUrl: PropTypes.string,
            reposUrl: PropTypes.string,
            email: PropTypes.string,
            company: PropTypes.string,
            blog: PropTypes.string,
            location: PropTypes.string,
            bio: PropTypes.string,
            publicRepos: PropTypes.number,
            followers: PropTypes.number,
            following: PropTypes.number
        }
    }

    constructor (props) {
        super(props)

        const {reposUrl, 
             email, company, blog ,location, bio, publicRepos,
              followers ,following} = this.props
        this.state = {
            userLists : [
                { item: reposUrl, title: '仓库链接' ,icon: null },
                { item: email, title: '邮件' ,icon: <EmailIcon className="list-icon"/> },
                { item: company, title: '公司' ,icon: <BusinessIcon className="list-icon"/> },
                { item: blog, title: '博客' ,icon: <ModeEditIcon className="list-icon" /> },
                { item: location, title: '地址' ,icon: <LocationOnIcon className="list-icon"/> },
                { item: publicRepos, title: '公开仓库数' ,icon: <ReorderIcon className="list-icon"/> },
                { item: followers, title: '粉丝数' ,icon: <StarIcon className="list-icon"/> },
                { item: following, title: '关注数' ,icon: <PersonAddIcon className="list-icon"/> },
            ]
        }
        
    }
       
    
    
    componentWillReceiveProps (nextProps) {
         const {reposUrl, 
             email, company, blog ,location, bio, publicRepos,
              followers ,following} = nextProps

        const userLists = [
            { item: <a className="link" href={reposUrl} target="_blank">仓库API</a>, title: '仓库API' ,icon: null },
            { item: email, title: '邮件' ,icon: <EmailIcon className="list-icon"/> },
            { item: company, title: '公司' ,icon: null },
            { item: <a className="link" href={blog} target="_blank">博客</a>, title: '博客' ,icon: null },
            { item: location, title: '地址' ,icon: null },
            { item: publicRepos, title: '公开仓库数' ,icon: null },
            { item: followers, title: '粉丝数' ,icon: null },
            { item: following, title: '关注数' ,icon: null },
        ]

        this.setState({
            userLists: userLists
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
        console.log('this.state.userLists: ', this.state.userLists)
         const {isLoading, errorMsg, name, login, avatar, bio, githubUrl } = this.props
         let { createdAt, updatedAt } = this.props
         createdAt = formatTime(createdAt)
         updatedAt = formatTime(updatedAt)

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
                        errorMsg ? errorMsg : 
                        <header className="user-header">
                            <h2 className="name">{name}</h2>
                            <div className="intro">
                                <div className="user-bio">
                                    <Img className="avatar" src={avatar} alt={name} title={name} />
                                    <h3 className="login">{login}</h3>
                                    <span className="bio">{bio}</span>
                                </div>
                                <List className="user-list" >
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