import React, { Component } from 'react'
import { GithubOrgDiv } from '../../styled/Github'
import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton'
import Search from 'material-ui-icons/search'
import SearchCom from '../../components/Search/Search'

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
