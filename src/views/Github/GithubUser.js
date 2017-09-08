import React, { Component } from 'react'
import { GithubUserDiv } from '../../styled/Github'
import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton'
import Search from 'material-ui-icons/search'
import SearchCom from '../../components/Search/Search'
import * as githubUserInfoActions  from '../../redux/actions/githubUser'
import {connect} from 'react-redux'

import {
    isLoadingSelector,
    errorMsgSelector,
    nameSelector,
    avatarSelector,
} from '../../selector/githubUser'


class GithubUser extends Component {
    static get propTypes() { 
        return { 
            isLoading: PropTypes.bool.isRequired,
            errorMsg: PropTypes.string.isRequired,
            getGithubUser: PropTypes.func.isRequired,
            name: PropTypes.string,
            avatar: PropTypes.string
        }
    }

    
    _searchUser (value) {
        console.log('value: ', value)
        this.props.getGithubUser(value)
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
        return (
            <GithubUserDiv className="githubUser">
                <h1 className="title">Find Github User</h1>
                <section className="searchArea">
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
                </section>
                <SearchCom
                     label = "User"
                     placeholder= '请输入用户名（Please input username）'
                     helperText = "To Search User!"
                     ariaLabel = "To Search User"
                     _this = {this}
                />
            </GithubUserDiv>
        )
    }
}


const mapStateToProps = (state) => ({
    isLoading: isLoadingSelector(state),
    errorMsg: errorMsgSelector(state),   
    name: nameSelector(state),  
    avatar: avatarSelector(state)
})



export default connect(
    mapStateToProps,
    githubUserInfoActions
)(GithubUser)