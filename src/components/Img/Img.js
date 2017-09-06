import React, { Component } from 'react'
import Img from '../../styled/img'

export default class Imgs extends Component {

    render() {
        const {src, alt, title} = this.props

        return (
            <Img src={src} alt={alt} title='222' />
        )
    }
}
