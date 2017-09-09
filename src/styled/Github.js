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
    .header {
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
            @media (max-width: 600px) {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .bio {
                width: 30%;
                max-width: 230px;
                outline: 1px solid red;
                margin-right: 1em;
                @media (max-width: 600px) {
                    width: 80%;
                    max-width: 230px;
                    margin-right: 0;
                }
                .avatar {
                    width: 100%;
                    height: auto;
                }
            }
            .list {
                flex: 1;
                @media (max-width: 600px) {
                    width: 100%;
                    margin-top: 1em;
                }
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
                        margin-right: 1em;
                    }
                    .item {
                       word-break: break-all;
                       flex: 1;
                    }
                }
            }
        }
        .githubUrl {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin-top: 1em;
            cursor: pointer;
            text-transform: lowercase;
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
