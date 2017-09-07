import styled from 'styled-components'


const NotFoundDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 16px * 3);
    @media (max-width: 50em) {
        height: calc(100vh - (60px + 1em) - 16px * 3);
    }
    .title {
       height: 1.6em;
       font-size: 60px;
    }
`



export default NotFoundDiv
