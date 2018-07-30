import styled from 'styled-components';

const StyledVideo = {};

StyledVideo.RespVideo = styled.div`
    
  width: 100%;
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  max-height: 600px;
  margin-right: -1px; // hack away strange 1px empty space on right of video
  overflow: hidden;

  iframe,
  object,
  embed {
    position: absolute;
    top: -2px;
    left: -2px;
    width: 101%;
    height: 101%;
    max-height: 600px;
  }

`

export default StyledVideo;