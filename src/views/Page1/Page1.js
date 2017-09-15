import React, { Component } from 'react'
import {Container} from '../../styled'
import {connect} from 'react-redux'
import * as testAction  from '../../redux/actions/test.js'
import {
   isLoadingSelector,
   errorMsgSelector,
   songSelector
} from '../../selector/test.js'
import PropTypes from 'prop-types'
import Button  from 'material-ui/Button'
import Lazy from '../../styled/Lazy'
import {lazyimgApi} from '../../api/api.js'
import Img from '../../components/Img/Img'
import axios from 'axios'
import { withRouter } from 'react-router'

class Page1 extends Component {
    static get propTypes() { 
        return { 
            isLoading: PropTypes.bool.isRequired,
            errorMsg: PropTypes.string.isRequired,
            song: PropTypes.any,
            getSong: PropTypes.func,
            location: PropTypes.obj.isRequired,
            history: PropTypes.obj.isRequired,
            match: PropTypes.obj.isRequired
        }
    }

    constructor (props) {
        super(props) 
        this.state = {
            imgArr: []
        }
    }

    
    componentWillMount() {
       // let res = axios.get(`${lazyimgApi}`)
        this.getUserInfo()
    }
    
    getUserInfo = async () => {
        try {
            let res = await axios.get(`${lazyimgApi}`)
            this.setState({
                imgArr: res.data.img
            })
        } catch (err) {
            console.log('err:', err)
        }
    }



    render() {

        const {isLoading, errorMsg, getSong, song} = this.props
        const {imgArr} = this.state
         const {location, history, match} = this.props

         console.log('this.props: ', this.props)
         console.log('match.params.id: ', match.params.id)
         console.log('location.search', location.search)
         let s = {}
         location.search.replace(/([^?&=]+)=([^?&=]*)/g, (m, p1, p2) => {
             console.log(m, p1, p2)
             s[`${p1}`] = p2
         } )
         console.log(s)

        const imgs = imgArr.map((img, i) => {
            return (
              <Lazy key={i}>
                <Img  src={img}/>
              </Lazy>
            )
        })



        return (
            <Container className="lazyArea">
                {imgs}
            </Container>
        )
    }
}


const mapStateToProps = (state) => ({
    isLoading: isLoadingSelector(state),
    errorMsg: errorMsgSelector(state),  
    song: songSelector(state)
})




export default withRouter(connect(
    mapStateToProps,
    testAction
)(Page1))