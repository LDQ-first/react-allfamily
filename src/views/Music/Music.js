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
   songListSelector,
   disListsIsLoadingSelector,
   disListsErrorMsgSelector,
   disListSelector
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


const mapStateToProps = (state) => ({
    songListsIsLoading: songListsIsLoadingSelector(state),
    songListsErrorMsg: songListsErrorMsgSelector(state),  
    songList: songListSelector(state),
    disListsIsLoading: disListsIsLoadingSelector(state),
    disListsErrorMsg: disListsErrorMsgSelector(state),  
    disList: disListSelector(state),
})




class Music extends Component {
    static get propTypes() { 
        return { 
            songListsIsLoading: PropTypes.bool,
            songListsErrorMsg: PropTypes.string,
            songList: PropTypes.array,
            getSongLists: PropTypes.func,
            disListsIsLoading: PropTypes.bool,
            disListsErrorMsg: PropTypes.string,
            disList: PropTypes.array,
            getDisLists: PropTypes.func,
        }
    }

    constructor(porps) {
        super(porps)
        this.state = {
            value: 0,
            open: true
        }
        

    }

    
    
    componentWillMount() {
        console.log('this.props: ', this.props)
        const {getSongLists, songList, getDisLists} = this.props
        getSongLists()   
       
    }
    
    

    
    componentDidMount() {
        console.log('this.props: ', this.props)
    
    }
    
    componentDidUpdate() {
        const {value, open} = this.state
        const {songList, getDisLists} = this.props
        
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
        const {songList, getDisLists, disList} = this.props
        const jsSongList = Immutable.List(songList).toJS()
        const jsDisList = Immutable.List(disList).toJS()
        console.log(jsDisList)

        const SongLists = jsSongList.map((list, index) => {
            return (
                value === index && 
                <SongList img={list.picUrl} open={open} songListDesc={list.songListDesc} 
                id={list.id} getDisLists={getDisLists}/>
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
                            <BottomNavigationButton label="经典" icon={<RestoreIcon />} />
                            <BottomNavigationButton label="日语" icon={<FavoriteIcon />} />
                            <BottomNavigationButton label="民谣" icon={<LocationOnIcon />} />
                            <BottomNavigationButton label="ACG" icon={<FolderIcon />} />
                        </BottomNavigation>

                     </div>

                      

                </MusicDiv>
            </Container>
        )
    }
}









export default connect(
    mapStateToProps,
    musicAction
)(Music)