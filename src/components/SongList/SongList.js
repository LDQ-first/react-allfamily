import React, { Component } from 'react'
import Collapse from 'material-ui/transitions/Collapse'
import PropTypes from 'prop-types'




export default class SongList extends Component {
    static get propTypes() { 
        return { 
            img: PropTypes.string.isRequired,
            open: PropTypes.boolean.isRequired
        }
    }


    render() {

        const {img, open} = this.props


        return (
            <Collapse in={open} className="song-lists">
                <img src={img} />
            </Collapse>
        )
    }
}
