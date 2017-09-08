import React, { Component } from 'react'
import { GithubOrgDiv } from '../../styled/Github'
import TextField from 'material-ui/TextField'

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

    render() {
        return (
            <GithubOrgDiv>
                <h1 className="title">Find Github Org</h1>
                <TextField
                    id="placeholder"
                    label="Org"
                    InputProps={{ placeholder: '请输入组织名（Please input orgname）' }}
                    helperText="To Search Org!"
                    fullWidth
                    margin="normal"
                    onKeyDown = {(e) => {this._keySearch(e)}}
                />
            </GithubOrgDiv>
        )
    }
}
