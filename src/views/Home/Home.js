import React, { Component } from 'react'
import {Container} from '../../styled'
import Button from '../../styled/button'
import { withRouter } from 'react-router'

 class Home extends Component {
     static get propTypes() { 
        return { 
            location: PropTypes.obj.isRequired,
            history: PropTypes.obj.isRequired,
            match: PropTypes.obj.isRequired
        }
    }


    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    _handleClick () {
        this.setState({
            count: ++this.state.count
        })
    }

    _changeRoute (history, path) {
        history.push(path)
    }

    render() {
        console.log(this.props)
        const {location, history, match} = this.props

        return (
            <Container>
                <div>
                    this is home~<br/>
                    当前计数：{this.state.count}<br/>
                    <Button className="btn" onClick={() => this._handleClick()}>自增</Button>
                </div>
                <div>
                    <Button className="btn" onClick={() => this._changeRoute(history, '/page1')}
                    >跳转到 page1</Button>
                    <Button className="btn" onClick={() => this._changeRoute(history, '/page1/001')}
                    >跳转到 page1/001</Button>
                    <Button className="btn" onClick={() => this._changeRoute(history, '/page1?id=001')}
                    >跳转到 page1?id=001</Button>
                    <Button className="btn" onClick={() => this._changeRoute(history, '/page1/001?id=001&page=1')}
                    >跳转到 page1/001?id=001&page=1</Button>
                </div>
            </Container>
        )
    }
}


export default withRouter(Home)