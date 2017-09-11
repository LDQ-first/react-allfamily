import React, { Component } from 'react'
import {connect} from 'react-redux'
import Loading from '../../components/Loading/Loading'
import {Container} from '../../styled'
import PropTypes from 'prop-types'
import {MusicDiv} from '../../styled/music.js'
import {musicApi} from '../../api/api.js' 
import {
   songListsIsLoadingSelector,
   songListsErrorMsgSelector,
   songListSelector
} from '../../selector/music.js'
import * as musicAction  from '../../redux/actions/music.js'
import Immutable from 'immutable'





class Music extends Component {
    static get propTypes() { 
        return { 
            songListsIsLoading: PropTypes.bool.isRequired,
            songListsErrorMsg: PropTypes.string.isRequired,
            songList: PropTypes.array,
            getSongLists: PropTypes.func
        }
    }

    constructor(porps) {
        super(porps)
        this.state = {

        }
        

    }

    
    componentDidMount() {
        console.log('this.props: ', this.props)
        const {getSongLists} = this.props
        getSongLists()
    }
    

    componentWillReceiveProps (nextProps) {
        console.log('this.props: ', this.props)
        console.log('this.nextProps: ', this.nextProps)



    }


    render() {
        const {songList} = this.props
        console.log(Immutable.List(songList).toJS())

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
    songListsIsLoading: songListsIsLoadingSelector(state),
    songListsErrorMsg: songListsErrorMsgSelector(state),  
    songList: songListSelector(state)
})




export default connect(
    mapStateToProps,
    musicAction
)(Music)