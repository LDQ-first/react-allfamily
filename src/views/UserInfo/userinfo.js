import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUserInfo} from '../../redux/actions/userInfo'

import AvatarImg from '../../styled/AvatarImg'
import Img from '../../components/Img/Img'
import {Container} from '../../styled'
import Loading from '../../components/Loading/Loading'
import LazyImg from '../../styled/LazyImg'
import bea from '../../../static/img/002.jpg'

class UserInfo extends Component {
    render() {
        const {userInfo, isLoading, errorMsg} = this.props.userInfo
        const {getUserInfo} = this.props
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
                <button onClick={() => getUserInfo()}>
                    获取用户信息
                </button>
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
