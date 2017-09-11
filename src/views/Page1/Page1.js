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


class Page1 extends Component {
    static get propTypes() { 
        return { 
            isLoading: PropTypes.bool.isRequired,
            errorMsg: PropTypes.string.isRequired,
            song: PropTypes.any,
            getSong: PropTypes.func
        }
    }



    render() {
        const {isLoading, errorMsg, getSong, song} = this.props

        return (
            <Container>
               这是Page1
               
            </Container>
        )
    }
}


const mapStateToProps = (state) => ({
    isLoading: isLoadingSelector(state),
    errorMsg: errorMsgSelector(state),  
    song: songSelector(state)
})




export default connect(
    mapStateToProps,
    testAction
)(Page1)