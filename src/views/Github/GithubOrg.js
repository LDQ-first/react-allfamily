import React, { Component } from 'react'
import { GithubOrgDiv } from '../../styled/Github'
import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton'
import Search from 'material-ui-icons/search'
import SearchCom from '../../components/Search/Search'
import * as githubOrgInfoActions  from '../../redux/actions/githubOrg'
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
    emailSelector,
    companySelector,
    blogSelector,
    locationSelector
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
    company: companySelector(state),
    blog: blogSelector(state),
    location: locationSelector(state),
    email: emailSelector(state)
})



class GithubOrg extends Component {
    static get propTypes() { 
        return { 
            isLoading: PropTypes.bool.isRequired,
            errorMsg: PropTypes.string.isRequired,
            getGithubOrg: PropTypes.func.isRequired,
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
            publicRepos: PropTypes.number
        }
    }

    constructor (props) {
        super(props)

        const {reposUrl, email, company, blog ,location, publicRepos} = this.props
        this.state = {
            orgLists : [
                { item: <a className="link" href={reposUrl} target="_blank">仓库API</a>, title: '仓库链接' ,icon: null },
                { item: email, title: '邮件' ,icon: <EmailIcon className="list-icon"/> },
                { item: company, title: '公司' ,icon: <BusinessIcon className="list-icon"/> },
                { item: <a className="link" href={blog} target="_blank">博客</a>, title: '博客' ,icon: <ModeEditIcon className="list-icon" /> },
                { item: location, title: '地址' ,icon: <LocationOnIcon className="list-icon"/> },
                { item: publicRepos, title: '公开仓库数' ,icon: <ReorderIcon className="list-icon"/> }
            ]
        }
        
    }
       
    
    
    componentWillReceiveProps (nextProps) {
         const {reposUrl,  email, company, blog ,location, publicRepos } = nextProps

        const orgLists = [
            { item: <a className="link" href={reposUrl} target="_blank">仓库API</a>, title: '仓库链接' ,icon: null },
            { item: email, title: '邮件' ,icon: <EmailIcon className="list-icon"/> },
            { item: company, title: '公司' ,icon: <BusinessIcon className="list-icon"/> },
            { item: <a className="link" href={blog} target="_blank">博客</a>, title: '博客' ,icon: <ModeEditIcon className="list-icon" /> },
            { item: location, title: '地址' ,icon: <LocationOnIcon className="list-icon"/> },
            { item: publicRepos, title: '公开仓库数' ,icon: <ReorderIcon className="list-icon"/> }
        ]

        this.setState({
            orgLists: orgLists
        })
    }
    

    _searchOrg (value) {
        console.log('value: ', value)
        if(value === '') {
            console.log(value)
            return
        }
        this.props.getGithubOrg(value.trim())
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

        console.log('this.state.orgLists: ', this.state.orgLists)
         const {isLoading, errorMsg, name, login, avatar, githubUrl } = this.props
         let { createdAt, updatedAt } = this.props
         createdAt = formatTime(createdAt)
         updatedAt = formatTime(updatedAt)


        return (
            <GithubOrgDiv>
                <h1 className="title">Find Github Org</h1>
                 {/*<section className="searchArea">
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
                </section>*/}
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