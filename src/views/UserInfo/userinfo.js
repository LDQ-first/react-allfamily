import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUserInfo} from '../../redux/actions/userInfo'
import Img from '../../components/Img/Img'
import Loading from '../../components/Loading/Loading'
import {Container} from '../../styled'
import AvatarImg from '../../styled/AvatarImg'
import LazyImg from '../../styled/LazyImg'
import bea from '../../../static/img/002.jpg'
import Button from '../../styled/button'
import PropTypes from 'prop-types'

class UserInfo extends Component {
    static PropTypes = {
       userInfo: PropTypes.object.isRequired, 
       isLoading: PropTypes.bool.isRequired,
       errorMsg: PropTypes.string.isRequired
    }

    render() {
        const {userInfo, isLoading, errorMsg} = this.props.userInfo
        const {getUserInfo} = this.props
        console.log(this.props)
        return (
            <Container>
                {
                    isLoading ? <Loading/>:
                    (
                        errorMsg ? errorMsg  :
                        <div>
                            <p>用户信息：</p>
                            <p>用户名：{userInfo.name}</p>
                            <p>介绍：{userInfo.intro}</p>
                        </div>
                    )
                }
                <div>
                    <AvatarImg>
                        <Img src={userInfo.avatar} title={userInfo.name} alt={userInfo.name}/>
                    </AvatarImg>
                </div>
                <Button onClick={() => getUserInfo()} >
                    获取用户信息
                </Button>
                <LazyImg>
                    <Img src={bea}/>
                </LazyImg>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    userInfo: state.userInfo
})

const mapDispatchToProps = {
    getUserInfo
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserInfo)
