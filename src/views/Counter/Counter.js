import React, { Component } from 'react'
import {increment, decrement, reset} from '../../redux/actions/counter'
import {connect} from 'react-redux'
import {Container} from '../../styled'
import Button from '../../styled/button'

class Counter extends Component {
    render() {
        const {increment, decrement, reset, counter } = this.props

        return (
            <Container>
                <div>当前计数为{counter.count}(显示redux计数)</div>
                <Button onClick={() => {
                    increment()
                }}>自增
                </Button>
                <Button onClick={() => {
                    decrement()
                }}>自减
                </Button>
                <Button onClick={() => {
                    reset()
                }}>重置
                </Button>
            </Container>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}


const mapDispatchToProps  = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment())
        },
        decrement: () => {
            dispatch(decrement())
        },
        reset: () => {
            dispatch(reset())
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)