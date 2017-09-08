import React, { Component } from 'react'
import { GithubUserDiv } from '../../styled/Github'
import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton'
import Search from 'material-ui-icons/search'

export default class GithubUser extends Component {
    
    _searchUser (value) {
        console.log('value: ', value)
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
                        <Search onClick = {() => {this._iconSearch()}}/>
                    </span>   
                </section>
            </GithubUserDiv>
        )
    }
}
