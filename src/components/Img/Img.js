import React, { Component } from 'react'
import Img from '../../styled/img'
import loadingGif from '../../../static/img/loading.gif'
import PropTypes from 'prop-types'
import pureRender from 'pure-render-decorator'

export default class Imgs extends Component {
    
    static get propTypes() { 
        return { 
            src: PropTypes.string, 
            alt: PropTypes.string,
            title: PropTypes.string,
            className: PropTypes.string
        }
    }


    constructor(props) {
        super(props)
        this.state = { 
            imageStatus: 0,
            imgUrl: loadingGif,
            show: false,
            winHeight: window.innerHeight,
            winTop: window.scrollY
        }
    }

    
     
    _check () {
        const {winTop, winHeight} = this.state
        console.log(this)
        if(!this.imgs) {
            console.log(this.state.imgs)
            if( winTop + winHeight > this.state.imgs.offsetTop  && 
                winTop < this.state.imgs.offsetTop + this.state.imgs.offsetHeight) {
                this.setState({
                    show: true
                })
            }
        }
        else if( winTop + winHeight > this.imgs.offsetTop  && 
            winTop < this.imgs.offsetTop + this.imgs.offsetHeight) {
            this.setState({
                imgs: this.imgs,
                show: true
            })
        }
    }

    _showImg () {
         
        this.setState({
                winTop: window.scrollY
            })
        this._check()
    }
    
    componentDidMount() {
        this._check ()
        window.addEventListener('scroll',this._showImg.bind(this))
    }

    
    componentWillUnmount() {
        window.removeEventListener('scroll', this._showImg)
    }

    
    _handleImageLoaded() {
        this.setState({ 
            imageStatus: 200
        })
    }
    
    _handleImageErrored() {
        this.setState({ imageStatus: 404 })
    }

    render() {
        const {src, alt, title, className} = this.props
        const {imageStatus, imgUrl, show} = this.state
        const img = show ? (src ? src: imgUrl) : imgUrl
        return (
            <div ref={div => this.imgs = div}>
                <Img className={className} src={img} alt={alt} title={title} 
                    show={imageStatus !== 200 ? true: false}/>
                <Img className={className} src={img} alt={alt} title={title} 
                onLoad={this._handleImageLoaded.bind(this)}
                onError={this._handleImageErrored.bind(this)} 
                show={imageStatus === 200 ? true: false}/> 
            </div>   
        )
    }
}
