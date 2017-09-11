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
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation'
import RestoreIcon from 'material-ui-icons/Restore'
import FavoriteIcon from 'material-ui-icons/Favorite'
import LocationOnIcon from 'material-ui-icons/LocationOn'
import FolderIcon from 'material-ui-icons/Folder'



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
            value: 0
        }
        

    }
    

    
    componentDidMount() {
        console.log('this.props: ', this.props)
        const {getSongLists} = this.props
        getSongLists()   
    }
    



    handleChange = (e, value) => {
        this.setState({
            value
        })
    } 


    render() {
        const {value} = this.state
        console.log('this.props: ', this.props)
        const {songList} = this.props
        const jsSongList = Immutable.List(songList).toJS()
        console.log(jsSongList)

        jsSongList.forEach((list, index) => {
            
        })


        return (
            <Container>
                <MusicDiv>
                     <audio controls className="audio" >你的浏览器不支持喔！</audio>

                      <BottomNavigation
                            value={value}
                            onChange={this.handleChange}
                            showLabels
                        >
                            <BottomNavigationButton label="Recents" icon={<RestoreIcon />} />
                            <BottomNavigationButton label="Favorites" icon={<FavoriteIcon />} />
                            <BottomNavigationButton label="Nearby" icon={<LocationOnIcon />} />
                            <BottomNavigationButton label="Nearby" icon={<FolderIcon />} />
                        </BottomNavigation>

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