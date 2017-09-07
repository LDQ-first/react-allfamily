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
    static get propTypes() { 
        return { 
            userInfos: PropTypes.object.isRequired, 
            isLoading: PropTypes.bool.isRequired,
            errorMsg: PropTypes.string.isRequired,
            getUserInfo: PropTypes.func.isRequired,
            name: PropTypes.string,
            intro: PropTypes.string,
            avatar: PropTypes.string
        }
    }

    render() {
        const {getUserInfo, isLoading, errorMsg , userInfos, name, intro, avatar } = this.props
        
        return (
            <Container>
                {
                    isLoading ? <Loading/>:
                    (
                        errorMsg ? errorMsg  :
                        <div>
                            <p>用户信息：</p>
                            <p>用户名：{name}</p>
                            <p>介绍：{intro}</p>
                        </div>
                    )
                }
                <div>
                    <AvatarImg>
                        <Img src={avatar} title={name} alt={name}/>
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
    userInfos: state.getIn(['userInfo', 'userInfos']),
    isLoading: state.getIn(['userInfo', 'isLoading']),
    errorMsg: state.getIn(['userInfo', 'errorMsg']),
    name: state.getIn(['userInfo', 'userInfos', 'name']),    
    intro: state.getIn(['userInfo', 'userInfos', 'intro']),    
    avatar: state.getIn(['userInfo', 'userInfos', 'avatar'])    
})

const mapDispatchToProps = {
    getUserInfo
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserInfo)
