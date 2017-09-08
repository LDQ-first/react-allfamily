import {injectGlobal} from 'styled-components'
import styled from 'styled-components'

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
        background: linear-gradient(135deg,
        rgba(104, 201, 182, 1), rgba(54, 119, 206, 1)) no-repeat;
        background-attachment: fixed;
        font-family: "Helvetica Neue", "Arial", " Segoe UI", "PingFang SC", "Hiragino Sans GB", "STHeiti", "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC", "Noto Sans CJK SC", "Source Han Sans CN", "Noto Sans SC", "Source Han Sans TC", "Noto Sans CJK TC", "WenQuanYi Micro Hei", SimSun, sans-serif !important;
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
        &.per {
            padding: 0;
        } 
    }
    
`

module.exports = {
    Container
}