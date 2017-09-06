import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUserInfo} from '../../redux/actions/userInfo'

import AvatarImg from '../../styled/AvatarImg'
import {Container} from '../../styled'


class UserInfo extends Component {
    render() {
        const {userInfo, isLoading, errorMsg} = this.props.userInfo
        const {getUserInfo} = this.props
        return (
            <Container>
                {
                    isLoading ? '请求信息中......':
                    (
                        errorMsg ? errorMsg  :
                        <div>
                            <p>用户信息：</p>
                            <p>用户名：{userInfo.name}</p>
                            <p>介绍：{userInfo.intro}</p>
                            <AvatarImg src={userInfo.avatar} 
                            />
                        </div>
                    )
                }
                <button onClick={() => getUserInfo()}>
                    获取用户信息
                </button>
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
