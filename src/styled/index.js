import {injectGlobal} from 'styled-components'
import styled from 'styled-components'
import { lightBlue, deepPurple } from 'material-ui/colors'
const bgBlue = lightBlue[400]
const bgPurple = deepPurple[200]


export default injectGlobal`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        height: 100vh;
        overflow: auto;
    }
    body {
        height: 100vh;
        line-height: 1.6;
        min-width: 320px;
        color: #2c3e50;
        /*background: linear-gradient(135deg, 
            rgba(78, 167, 224, 1) , 
            rgba(182, 173, 230, 1) 70%,
            rgba(165, 153, 224, 0.6) );*/
        background: linear-gradient(135deg, ${bgBlue}, ${bgPurple});
        background-attachment: fixed;
        font-family: "Helvetica Neue", "Arial", " Segoe UI",
                     "PingFang SC", "Hiragino Sans GB", "STHeiti",
                      "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC", 
                      "Noto Sans CJK SC", "Source Han Sans CN", "Noto Sans SC", 
                      "Source Han Sans TC", "Noto Sans CJK TC", "WenQuanYi Micro Hei",
                      SimSun, sans-serif !important;
    }
    ::-webkit-scrollbar {
        width: 0.5em
    }

    ::-webkit-scrollbar-track {
        border-radius: 0.25em;
        background: #ceb9d1
    }

    ::-webkit-scrollbar-thumb {
        height: 0.5em;
        border-radius: 0.25em;
        background: #498bd6 linear-gradient(180deg,#fff,rgba(3,169,244,.5),#0277bd)
    }
    ul,
    li {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    a {
        display: inline-block;
        text-decoration: none;
        color: #0060E9;
        &:hover, &:hover * {
            color: #007bba;
        }
    }
    p {
        margin: 10px 0;
    }
    button {
        display: inline-block;
        cursor: pointer;
        border: none;
        outline: none;
        -webkit-appearance: none;
    }
    .icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

`

const Container = styled.div`
    padding: 1em;
    padding-left: 13rem;
    &.per {
        padding: 0;
        padding-left: 10rem;
    } 
    @media (max-width: 50em) {
        padding: 1em;
        padding-top: 70px;
        &.noPadding {
            padding: 0;
        }
        &.topPadding {
            padding: 0;
            padding-top: 53px;
        }
    }
    
`

module.exports = {
    Container
}