import {injectGlobal} from 'styled-components'
import styled from 'styled-components'

export default injectGlobal`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        height: 100%;
    }
    body {
        height: 100%;
        padding: 1em;
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
    li {
        margin: 10px 0;
    }
    a {
        text-decoration: none;
        color: #0060E9;
        &:hover {
            text-decoration: underline;
            color: #FF6C09;
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
        color: #fff;
        overflow: hidden;
        background: #7e57c2;
        border-radius: 2px;
        height: 36px;
        line-height: 36px;
        padding: 0;
        min-width: 88px;
        box-shadow: 0 1px 6px rgba(0,0,0,.4),
                    0 1px 4px rgba(0,0,0,.2);
        margin: 10px;
        padding: 0 10px;
    }

`

const Container = styled.div`
    padding: 1em;
    padding-left: 12rem;
    @media (max-width: 50em) {
        padding: 1em;
        margin-top: calc(60px + 1em);
    }
`

module.exports = {
    Container
}