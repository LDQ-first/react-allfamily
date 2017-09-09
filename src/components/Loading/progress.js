import React, { Component } from 'react'
import { CircularProgress } from 'material-ui/Progress'

export default class Progress extends Component {
    render() {
        return (
            <div>
                <CircularProgress size={50} />     
            </div>
        )
    }
}
