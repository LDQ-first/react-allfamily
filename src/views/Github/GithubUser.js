import React, { Component } from 'react'
import { GithubUserDiv } from '../../styled/Github'
import TextField from 'material-ui/TextField'

export default class GithubUser extends Component {
    render() {
        return (
            <GithubUserDiv>
                <h1 className="title">Find Github User</h1>

            </GithubUserDiv>
        )
    }
}
