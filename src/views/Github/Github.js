import React, { Component } from 'react'
import GithubUser from './GithubUser'
import {Container} from '../../styled'

export default class Github extends Component {
    render() {
        return (
            <Container>
                <GithubUser/>
            </Container>
        )
    }
}
