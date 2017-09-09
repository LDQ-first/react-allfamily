import React, { Component } from 'react'
import { CircularProgress } from 'material-ui/Progress'

export default class Progress extends Component {
    render() {
        return (
            <div>
                <CircularProgress className={classes.progress} size={50} />     
            </div>
        )
    }
}
