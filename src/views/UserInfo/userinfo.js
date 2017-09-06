import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUserInfo} from '../../redux/actions/userInfo'
import styled from 'styled-components'


const AvatarImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.4),
                0 0 10px rgba(37, 93, 111, 0.6);
`


class UserInfo extends Component {
    render() {
        const {userInfo, isLoading, errorMsg} = this.props.userInfo
        const {getUserInfo} = this.props
        return (
            <div>
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
            </div>
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
