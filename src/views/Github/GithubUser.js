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

import {
    isLoadingSelector,
    errorMsgSelector,
    nameSelector,
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

         const {isLoading, errorMsg , name, avatar, githubUrl, reposUrl, 
             email, company, blog ,location, bio, publicRepos,
              followers ,following} = this.props
         let { createdAt, updatedAt } = this.props
         createdAt = formatTime(createdAt)
         updatedAt = formatTime(updatedAt)



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
                            <div className="avatar">
                                <img className="avatar" src={avatar} alt={name} title={name} />
                            </div>
                            
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