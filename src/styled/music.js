import styled from 'styled-components'
import {blue, green} from 'material-ui/colors'
const titleBlue = blue[50]
const disListsGreen = green['A100']
const dHeaderBlue = blue[500]

const MusicDiv = styled.div`
    max-width: 600px;
    margin: 0 auto;
    .music-player {
        outline: 1px solid red;
        .audio {
            display: block;
            margin-bottom: 10px;
        }
        .player {
            outline: 1px solid lightblue;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100px;
            background: #F4F4F4;
            .player-pic {
                width: 100px;
                height: 100px;
            }
            .player-info {
                flex: 1;
                padding: 10px 7px 0 7px;
                height: 100px;
                .player-info-header {
                    display: flex;
                    justify-content: flex-start;
                    align-items: baseline;
                    .player-info-song {
                        font-size: 1em;
                        margin-left: 1em;
                    }
                    .player-info-singer {
                        font-size: 0.8em;
                        color: #41484e;
                    }
                }
                .player-info-lyric {
                    outline: 1px solid pink;
                }
                .player-info-control {
                    outline: 1px solid purple;
                }
            }
        }
    }
    .song-lists-wrapper {
        outline: 1px solid lightgreen;
        .song-lists {
          .song-lists-header {
             position: relative;
             height: 100px;
             overflow: hidden;
              .song-lists-content {
                 position: relative;
                 z-index: 10;
                 padding: 0 1em;
                 display: flex;
                 justify-content: space-between;
                 align-items: center;
                 background: rgba(0, 0, 0, 0.3);
              }
              .song-lists-img {
                    width: 100px;
                    margin-right: 1em;
                    border: 4px solid #FFF;
                    box-shadow: 0 0 10px #ff9090;
                }
              .song-lists-title {
                  font-size: 1.2em;
                  color: ${titleBlue}
              }
              .song-lists-bg {
                  position: absolute;
                  top: 0;
                  bottom: 0;
                  left: 0;
                  right: 0;
                  z-index: 1;
                  filter: blur(15px);
                  transform: scale(1.15);
              }
          }
          
        }
        .disLists {
            background: ${disListsGreen};
            overflow: hidden;
            padding: 0;
            .disLists-header {
                background: ${dHeaderBlue};
                color: #FFF;
                box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
                            0px 4px 5px 0px rgba(0, 0, 0, 0.14),
                            0px 1px 10px 0px rgba(0, 0, 0, 0.12);
            }
            .disLists-wrapper {
                overflow: auto;
                height: calc(70px * 3);
            }
            .disList {
                position: relative;
                &.active {
                    .disList-cur {
                        display: block;
                    }
                }
                .disList-cur {
                    background: #f0749e;
                    width: 4px;
                    height: calc(100% - 24px);
                    position: absolute;
                    left: 0;
                    top: 12px;
                    display: none;
                }
                .disList-content {
                    .disList-title {
                        font-size: 1em;
                    }
                    .disList-subtitle {
                        font-size: 0.8em;
                    }
                }
            }
        }
        .song-lists-control {
            box-shadow: 0px -2px 2px -1px rgba(0, 0, 0, 0.1),
                        0px -4px 3px 0px rgba(0, 0, 0, 0.07),
                        0px -1px 6px 0px rgba(0, 0, 0, 0.06);
        }
    }
    


`



export {
   MusicDiv
}