import React, { Component } from 'react'
import { GithubUserDiv } from '../../styled/Github'
import TextField from 'material-ui/TextField'

export default class GithubUser extends Component {
    render() {
        return (
            <GithubUserDiv>
                <h1 className="title">Find Github User</h1>
                <TextField
                    id="placeholder"
                    label="User"
                    InputProps={{ placeholder: '请输入用户名（Please input username）' }}
                    helperText="To Search User!"
                    fullWidth
                    multiline
                    margin="normal"
                />
            </GithubUserDiv>
        )
    }
}
