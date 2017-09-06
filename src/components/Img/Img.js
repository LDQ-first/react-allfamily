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
            winTop: window.scrollY,

        }
    }

    
    componentDidMount() {
        window.addEventListener('scroll', () => {
            this.setState({
                winTop: window.scrollY
            })
            if()
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
        const img = show ? src : imgUrl
        return (
            <div>
             { /*  <Img src={imgUrl} alt={alt} title={title} 
                 show={imageStatus != 200 ? true: false}/>
                <Img src={src} alt={alt} title={title} 
                onLoad={this.handleImageLoaded.bind(this)}
                onError={this.handleImageErrored.bind(this)} 
                show={imageStatus === 200 ? true: false}/> */}

            </div>   
        )
    }
}
