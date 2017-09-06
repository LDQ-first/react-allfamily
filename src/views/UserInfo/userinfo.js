import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUserInfo} from '../../redux/actions/userInfo'


class UserInfo extends Component {
    render() {
        const {userInfo, isLoading, errorMsg} = this.props.userInfo
        console.log(this.props)
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
                        </div>
                    )
                }
                <button onClick={() => this.props.getUserInfo()}>
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
