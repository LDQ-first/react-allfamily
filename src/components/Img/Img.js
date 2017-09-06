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

    
    componentDidMount() {
        this.setState({
            imgsHeight: this.imgs.offsetHeight,
            imgsTop: this.imgs.offsetTop
        })
        window.addEventListener('scroll', () => {
            const {winTop, winHeight, imgsHeight, imgsTop} = this.state
            this.setState({
                winTop: window.scrollY
            })
            console.log(' winTop + winHeight: ',  winTop + winHeight )
            console.log(' imgsTop: ',  imgsTop )
            console.log(' winTop: ',  winTop )
            console.log(' imgsTop + imgsHeight: ',  imgsTop + imgsHeight )
            if( winTop + winHeight > imgsTop && winTop < imgsTop + imgsHeight) {
                this.setState({
                    show: true
                })
            }
        })
    }

    
    componentWillUnmount() {
        window.removeEventListener('scroll')
    }
    
    
    

    
    handleImageLoaded() {
        this.setState({ 
            imageStatus: 200
        })
    }
    
    handleImageErrored() {
        this.setState({ imageStatus: 404 })
    }

    render() {
        const {src, alt, title} = this.props
        const {imageStatus, imgUrl, show} = this.state
        const img = show ? (src ? src: imgUrl) : imgUrl
        return (
            <div ref={div => this.imgs = div}>
                <Img src={img} alt={alt} title={title} 
                    show={imageStatus != 200 ? true: false}/>
                <Img src={img} alt={alt} title={title} 
                onLoad={this.handleImageLoaded.bind(this)}
                onError={this.handleImageErrored.bind(this)} 
                show={imageStatus === 200 ? true: false}/> 
            </div>   
        )
    }
}
