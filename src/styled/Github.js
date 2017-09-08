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
    .searchArea {
        display: flex;
        align-items: center;
        .search-input {
            flex: 1;
        }
        .search-icon {
            display: flex;
            align-items: center;
            cursor: pointer;
        }
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
