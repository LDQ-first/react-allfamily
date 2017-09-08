import React, { Component } from 'react'
import { GithubOrgDiv } from '../../styled/Github'
import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton'
import Search from 'material-ui-icons/search'
import SearchCom from '../../components/Search/Search'
import * as githubOrgInfoActions  from '../../redux/actions/githubOrg'
import {connect} from 'react-redux'

import {
    isLoadingSelector,
    errorMsgSelector,
    nameSelector,
    avatarSelector,
    createdAtSelector,
    updatedAtSelector,
    githubUrlSelector,
   /* reposUrlSelector,
    publicReposSelector,
    publicGistsSelector,
    followersSelector,
    followingSelector,
    emailSelector,
    companySelector,
    blogSelector,
    locationSelector,
    bioSelector*/
} from '../../selector/githubUser'


const mapStateToProps = (state) => ({
    isLoading: isLoadingSelector(state),
    errorMsg: errorMsgSelector(state),   
    name: nameSelector(state),  
    avatar: avatarSelector(state),
    createdAt: createdAtSelector(state),
    updatedAt: updatedAtSelector(state),
    githubUrl: githubUrlSelector(state),
    /*reposUrl: reposUrlSelector(state),
    publicRepos: publicReposSelector(state),
    publicGists: publicGistsSelector(state),
    followers: followersSelector(state),
    following: followingSelector(state),
    company: companySelector(state),
    blog: blogSelector(state),
    location: locationSelector(state),
    bio: bioSelector(state)*/
})



class GithubOrg extends Component {
    static get propTypes() { 
        return { 
            isLoading: PropTypes.bool.isRequired,
            errorMsg: PropTypes.string.isRequired,
            getGithubOrg: PropTypes.func.isRequired,
            name: PropTypes.string,
            avatar: PropTypes.string
        }
    }

    _searchOrg (value) {
        console.log('value: ', value)
        this.props.getGithubOrg(value)
    }

    _keySearch (e) {
        if(e.keyCode === 13) {
            const value = e.target.value
            this._searchOrg(value)
        }
    }

    _iconSearch () {
        const value = this._search.value
        this._searchOrg(value)
    }

    render() {
        return (
            <GithubOrgDiv>
                <h1 className="title">Find Github Org</h1>
                 <section className="searchArea">
                    <TextField
                        id="placeholder"
                        label="Org"
                        InputProps={{ placeholder: '请输入组织名（Please input orgname）' }}
                        helperText="To Search Org!"
                        fullWidth
                        margin="normal"
                        onKeyDown = {(e) => {this._keySearch(e)}}
                    />
                    <span className="search-icon">  
                        <IconButton color="primary" aria-label="To Search Org">
                            <Search onClick = {() => {this._iconSearch()}}/>
                        </IconButton>
                    </span>
                </section>
                <SearchCom
                     label = "Org"
                     placeholder= '请输入组织名（Please input orgname）'
                     helperText = "To Search Org!"
                     ariaLabel = "To Search Org"
                     _this = {this}
                />
            </GithubOrgDiv>
        )
    }
}

export default connect(
    mapStateToProps,
    githubOrgInfoActions
)(GithubOrg)