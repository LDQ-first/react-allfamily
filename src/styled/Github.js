import styled from 'styled-components'

const GithubItemDiv = styled.div`
    outline: 1px solid red;
    padding: 1rem 3rem;
    @media (max-width: 450px) {
         padding: 1rem;
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
    .user-header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .name {
            width: 100%;
        }
        .intro {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            .avatar {
                width: 30%;
                outline: 1px solid red;
            }
            .user-list {
                .list-item {
                    padding: 0;
                }
            }
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
