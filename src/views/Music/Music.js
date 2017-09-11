import React, { Component } from 'react'
import {connect} from 'react-redux'
import Loading from '../../components/Loading/Loading'
import {Container} from '../../styled'
import PropTypes from 'prop-types'
import {MusicDiv} from '../../styled/music.js'



export default class Music extends Component {
    static get propTypes() { 
        return { 
            
        }
    }


    render() {
        return (
            <Container>
                <MusicDiv>
                     <audio controls className="audio" >你的浏览器不支持喔！</audio>


                </MusicDiv>
            </Container>
        )
    }
}


const mapStateToProps = (state) => ({
   
})


