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
import SongList from '../../components/SongList/SongList.js'
import IconButton from 'material-ui/IconButton'
import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'






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
            value: 0,
            open: true
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

    handleClick = () => {
        this.setState({ open: !this.state.open });
    }


    render() {
        const {value, open} = this.state
        console.log('this.props: ', this.props)
        const {songList} = this.props
        const jsSongList = Immutable.List(songList).toJS()
        console.log(jsSongList)

        const SongLists = jsSongList.map((list, index) => {
            return (
                value === index && 
                <SongList img={list.picUrl} open={open} songListDesc={list.songListDesc}/>
            )
        })


        return (
            <Container>
                <MusicDiv>
                     <div className="music-player">
                          <audio controls className="audio" >你的浏览器不支持喔！</audio>
                          <IconButton color="primary" onClick={this.handleClick}>
                            {open ? <ExpandMore /> : <ExpandLess />}
                          </IconButton >
                     </div>
                     <div className="song-lists-wrapper">
                           {SongLists}
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

                     </div>

                      

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