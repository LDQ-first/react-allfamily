import React, { Component } from 'react'
import Collapse from 'material-ui/transitions/Collapse'
import PropTypes from 'prop-types'




export default class SongList extends Component {
    static get propTypes() { 
        return { 
            img: PropTypes.string.isRequired,
            songListDesc: PropTypes.string.isRequired,
            open: PropTypes.boolean.isRequired
        }
    }


    render() {

        const {img, open, songListDesc} = this.props


        return (
            <Collapse in={open} className="song-lists">
                <header className="song-lists-header">
                    <div className="song-lists-content">
                        <img src={img} className="song-lists-img"/>
                        <h2 className="song-lists-title">{songListDesc}</h2>
                    </div>
                    <div className="song-lists-bg" style={{
                        background: `url(${img}) no-repeat center/ cover`
                    }}>  
                    </div>
                </header>
                
            </Collapse>
        )
    }
}
