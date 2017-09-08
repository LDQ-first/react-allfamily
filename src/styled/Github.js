import styled from 'styled-components'

const GithubItemDiv = styled.div`
    outline: 1px solid red;
    padding: 1rem 3rem;
    @media (max-width: 450px) {
         padding: 1rem 1.5rem;
    }
    .title {
        text-align: center;
    }
`



const GithubUserDiv = GithubItemDiv.extend`
    
`

const GithubOrgDiv = styled(GithubItemDiv)`
    
`

export {
    GithubUserDiv,
    GithubOrgDiv
}
