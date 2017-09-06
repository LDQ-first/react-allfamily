import React, { Component } from 'react'
import Img from '../../styled/img'
import loadingGif from '../../../static/img/loading.gif'

export default class Imgs extends Component {

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
        if( winTop + winHeight > this.imgs.offsetTop  && 
            winTop < this.imgs.offsetTop + this.imgs.offsetHeight) {
            this.setState({
                show: true
            })
        }
    }
    
    componentDidMount() {
        this._check ()
        window.addEventListener('scroll', () => {
            this.setState({
                winTop: window.scrollY
            })
            this._check()
        })
    }

    
    componentWillUnmount() {
        window.removeEventListener('scroll')
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
        const {src, alt, title} = this.props
        const {imageStatus, imgUrl, show} = this.state
        const img = show ? (src ? src: imgUrl) : imgUrl
        return (
            <div ref={div => this.imgs = div}>
                <Img src={img} alt={alt} title={title} 
                    show={imageStatus !== 200 ? true: false}/>
                <Img src={img} alt={alt} title={title} 
                onLoad={this._handleImageLoaded.bind(this)}
                onError={this._handleImageErrored.bind(this)} 
                show={imageStatus === 200 ? true: false}/> 
            </div>   
        )
    }
}
