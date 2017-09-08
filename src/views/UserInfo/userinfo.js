import React, { Component } from 'react'
import {connect} from 'react-redux'
/*import {getUserInfo} from '../../redux/actions/userInfo'*/
import * as userInfoActions  from '../../redux/actions/userInfo'
import Img from '../../components/Img/Img'
import Loading from '../../components/Loading/Loading'
import {Container} from '../../styled'
import AvatarImg from '../../styled/AvatarImg'
import LazyImg from '../../styled/LazyImg'
import bea from '../../../static/img/002.jpg'
import Button from '../../styled/button'
import PropTypes from 'prop-types'
import {
    nameSelector,
    introSelector,
    avatarSelector,
    isLoadingSelector,
    errorMsgSelector
} from '../../selector/userinfo'

class UserInfo extends Component {
    static get propTypes() { 
        return { 
            isLoading: PropTypes.bool.isRequired,
            errorMsg: PropTypes.string.isRequired,
            getUserInfo: PropTypes.func.isRequired,
            name: PropTypes.string,
            intro: PropTypes.string,
            avatar: PropTypes.string
        }
    }

    render() {
        const {getUserInfo, isLoading, errorMsg , name, intro, avatar } = this.props
        
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
                <Button className="btn" onClick={() => getUserInfo()} >
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
    isLoading: isLoadingSelector(state),
    errorMsg: errorMsgSelector(state),   
    name: nameSelector(state),  
    intro: introSelector(state),
    avatar: avatarSelector(state)
})

/*const mapDispatchToProps = {
    getUserInfo
}*/



export default connect(
    mapStateToProps,
    userInfoActions
)(UserInfo)
