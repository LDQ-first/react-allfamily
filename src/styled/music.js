import styled from 'styled-components'
import {blue} from 'material-ui/colors'
const titleBlue = blue[100]

const MusicDiv = styled.div`
    
    .music-player {
        outline: 1px solid red;
        height: 100px;
    }
    .song-lists-wrapper {
        outline: 1px solid lightgreen;
        .song-lists {
          .song-lists-header {
             position: relative;
             height: 100px;
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
    }
    


`



export {
   MusicDiv
}