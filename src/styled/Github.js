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
            height: 2em;
        }
        .intro {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            .avatar {
                width: 30%;
                max-width: 230px;
                outline: 1px solid red;
                margin-right: 1em;
                .avatar-img {
                    width: 100%;
                }
            }
            .user-list {
                .list-item {
                    padding: 0;
                    .item-icon {
                        transform: scale(0.8);
                        background: transparent;
                        svg {
                            fill: #007bba;
                        }
                    }
                    .item-title {
                        
                    }
                }
            }
        }
        .githubUrl {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            cursor: pointer;
            margin-top: 1em;
            .item-icon {
                width: 2em;
                height: 2em;
                color: #007bba;
                margin-right: 2em;
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
