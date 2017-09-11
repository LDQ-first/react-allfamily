import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as userInfoActions  from '../../redux/actions/userInfo'
import Img from '../../components/Img/Img'
import Loading from '../../components/Loading/Loading'
import {Container} from '../../styled'
import AvatarImg from '../../styled/AvatarImg'
import LazyImg from '../../styled/LazyImg'
import bea from '../../../static/img/002.jpg'
import Buttons from '../../styled/button'
import PropTypes from 'prop-types'
import {
    nameSelector,
    introSelector,
    avatarSelector,
    isLoadingSelector,
    errorMsgSelector,
    githubUrlSelector,
    loginSelector
} from '../../selector/userinfo'
import Button  from 'material-ui/Button'

class UserInfo extends Component {
    static get propTypes() { 
        return { 
            isLoading: PropTypes.bool.isRequired,
            errorMsg: PropTypes.string.isRequired,
            getUserInfo: PropTypes.func.isRequired,
            name: PropTypes.string,
            intro: PropTypes.string,
            avatar: PropTypes.string,
            githubUrl: PropTypes.string,
            login: PropTypes.string,
        }
    }

    render() {
        const {getUserInfo, isLoading, errorMsg , name, intro, avatar, githubUrl , login} = this.props
        
        return (
            
            <Container className="userInfo">

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
                <Button href={githubUrl} target="_blank" className="githubUrl">
                    <svg className="icon item-icon" aria-hidden="true">
                        <use xlinkHref="#icon-github"></use>
                    </svg>
                    <h4>查看{login}的Github</h4>
                </Button>
                <Buttons className="btn" onClick={() => getUserInfo()} >
                    获取用户信息
                </Buttons>
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
    avatar: avatarSelector(state),
    githubUrl: githubUrlSelector(state),
    login: loginSelector(state)
})

/*const mapDispatchToProps = {
    getUserInfo
}*/



export default connect(
    mapStateToProps,
    userInfoActions
)(UserInfo)
