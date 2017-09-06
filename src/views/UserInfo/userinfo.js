import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUserInfo} from '../../redux/actions/userInfo'


class UserInfo extends Component {
    cosnt {userInfo, isLoading, errorMsg} = this.props.userInfo
    render() {
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
                <button onClick={() => getUserInfo()}></button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo
    }
}

const mapDispatchToProps = (UserInfo) => {
    return {
        getUserInfo
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserInfo)
