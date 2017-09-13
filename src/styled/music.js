import styled from 'styled-components'
import {blue, green} from 'material-ui/colors'
const titleBlue = blue[50]
const disListsGreen = green['A100']
const dHeaderBlue = blue[500]
const thumbBlue = blue[500]
const thumbborderBlue = blue[300]

const MusicDiv = styled.div`
    max-width: 600px;
    min-width: 300px;
    margin: 0 auto;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3),
                0 3px 1px -2px rgba(0, 0, 0, 0.2),
                0 1px 5px 0 rgba(0, 0, 0, 0.2);
    .music-player {
        outline: 1px solid red;
        position: relative;
        border-bottom: 2px solid #CCC;
        .song-lists-expand {
            position: absolute;
            right: 0;
            bottom: 0;
            height: 30px;
            width: 24px;
        }
        .audio {
            display: block;
            margin-bottom: 10px;
        }
        .player {
            outline: 1px solid lightblue;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #F4F4F4;
            .player-pic {
                width: 120px;
                height: 120px;
                position: relative;
                border: 4px solid #FFF;
                box-shadow: 0 0 10px #ff9090;
                .player-pic-shade {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(195, 235, 253, 0.25);
                }
                .player-btn {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    margin-left: -24px;
                    margin-top: -24px;
                    z-index: 10;
                    svg {
                         width: 30px;
                         height: 30px;
                    }
                }
                .player-btn-paly {
                    animation: playmove 0.6s linear forwards;
                }
                .player-btn-pause {
                   animation: pausemove 0.6s linear forwards; 
                }
                @keyframes pausemove {
                    0% {
                        transform: translate(0,0) scale(1);
                    }
                    100% {
                         transform: translate(40px,40px) scale(0.8);
                    }
                }
                @keyframes playmove {
                    0% {
                         transform: translate(40px,40px) scale(0.8);
                    }
                    100% {
                        transform: translate(0,0) scale(1);
                    }
                }
                

            }
            .player-info {
                flex: 1;
                padding: 6px 7px 0 7px;
                height: 120px;
                display: flex;
                flex-direction: column;
                .player-info-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 25px;
                    .player-info-title {
                        width: 50%;
                        display: flex;
                        .player-info-song {
                            font-size: 1em;
                            margin-left: 4px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            max-width: 160px;
                        }
                        .player-info-singer {
                            font-size: 0.8em;
                            color: #41484e;
                            margin-left: 8px;
                            line-height: 25px;
                            white-space: nowrap;
                        }
                      
                    }
                    .player-info-header-control {
                        .player-info-formControlLabel {
                            height: 25px;
                            & p {
                                font-size: 12px;
                            }
                        }
                        .player-info-switch {
                            height: 25px;
                            width: 38px;
                            &>span {
                                height: 24px;
                                width: 24px;
                                &.MuiSwitch-checked-84 {
                                    color: ${dHeaderBlue};
                                }
                            }
                        }
                    }
                    
                }
                .player-info-lyric {
                    outline: 1px solid pink;
                    height: 60px;
                    position: relative;
                    &::before {
                        position: absolute;
                        
                    }
                    &::after {
                        position: absolute;

                    }
                }
                .player-info-control {
                    outline: 1px solid purple;
                    flex: 1;
                    display: flex;
                    align-items: center;
                    width: 93%;
                    position: relative;
                    .iconBtn {
                        width: 24px;
                        height: 30px;
                    }
                    .player-bar-wrapper {
                        flex: 1;
                        margin: 0 0.5em;
                        position: absolute;
                        top: -4px;
                        left: -8px;
                        width: calc(100% + 16px);
                        .player-bar {
                            height: 4px;
                            position: relative;
                            background: #CCC;
                            .player-played {
                                top: 0;
                                left: 0;
                                width: 100%;
                                bottom: 0;
                                position: absolute;
                                transition: transform 0.2s linear;
                                transform-origin: left;
                                background: #2196f3;
                                z-index: 1;
                             }
                             .player-loaded {
                                top: 0;
                                left: 0;
                                width: 100%;
                                bottom: 0;
                                position: absolute;
                                transition: transform 0.2s linear;
                                transform-origin: left;
                                background: #bbdefb;
                             }
                             .player-played-thumb {
                                 position: absolute;
                                 top: 0;
                                 right: -6px;
                                 margin-top: -6px;
                                 margin-right: -10px;
                                 height: 16px;
                                 width: 16px;
                                 border-radius: 50%;
                                 background: ${thumbBlue};
                                 cursor: pointer;
                                 border: 2px solid ${thumbborderBlue};
                             }
                        }
                    }
                    .player-changeSong-wrapper {
                        flex: 1; 
                        .player-changeSong {
                            display: flex;
                            justify-content: space-around;
                            height: 30px;
                            .player-changeSong-btn {
                                
                            }
                        }
                    }
                    .player-time {
                        font-size: 12px;
                        width: 70px;
                        @media (min-width: 500px) {
                            margin: 0 8px;
                        }
                        @media (min-width: 700px) {
                            margin: 0 1em;
                        }
                        @media (min-width: 1000px) {
                            margin: 0 1.5em;
                        }
                    }
                    .player-volume-wrapper {   
                        display: inline-flex; 
                        position: relative;
                        cursor: pointer;
                        @media (min-width: 500px) {
                            margin: 0 8px;
                        }
                        @media (min-width: 700px) {
                            margin: 0 1em;
                        }
                        @media (min-width: 1000px) {
                            margin: 0 1.5em;
                        }
                        &:hover {
                            .player-volume-bar-wrap {
                                display: block;
                            }
                        }
                        .player-volume {
                            display: inline-flex;
                        }
                        .player-volume-bar-wrap {
                            position: absolute;
                            bottom: 25px;
                            right: -7px;
                            width: 40px;
                            height: 60px;
                            z-index: 99;
                            display: none;
                            &:hover {
                                display: block;
                            }
                            .player-volume-bar {
                                position: absolute;
                                bottom: 2px;
                                right: 18px;
                                width: 5px;
                                height: 55px;
                                background: #aaa;
                                .aplayer-volume {
                                    position: absolute;
                                    bottom: 0;
                                    right: 0;
                                    width: 5px;
                                    transition: all 0.1s ease;
                                    background: ${dHeaderBlue}
                                }
                            }

                        }
                    }
                    .player-mode {
                        display: inline-flex;
                        @media (min-width: 500px) {
                            margin: 0 8px;
                        }
                        @media (min-width: 700px) {
                            margin: 0 1em;
                        }
                        @media (min-width: 1000px) {
                            margin: 0 1.5em;
                        }
                    }
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