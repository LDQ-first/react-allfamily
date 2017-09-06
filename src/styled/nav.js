import styled from 'styled-components'

export default styled.nav`
    width: 10rem;
    padding: 1em;
    background: linear-gradient(20deg, rgb(219,112,147), #daa357);
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    overflow: auto;
    color: #FBFBFB;
    box-shadow: 0 1px 4px rgba(0,0,0,.2),
                0 1px 2px rgba(0,0,0,.1);
    a {
        color: #FBFBFB;
        display: inline-block;
        &:hover {
            color: #0086CC;
        }
    }
    .logo {
        display: inline-block;
        width: 30px;
        height: 30px;
        img {
            width: 30px;
            height: 30px;
        }
    }
    .menu-svg {
        height: 30px;
        width: 30px;
        display: none;
    }
    @media (max-width: 50em) {
        width: 100%;
        height: auto;
        .menu-list {
           height: ${props => props.open ? 'calc(100vh - 66px)' : '0'};
           overflow: ${props => props.open ? 'auto' : 'hidden'};
           transition: all 0.8s ease-in-out;
           z-index: 10;
        }
        .menu-svg {
            display: inline-block;
            float: right;
            cursor: pointer;
        }
    }
`