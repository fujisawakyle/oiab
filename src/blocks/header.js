import styled from 'styled-components';
import ReactSVG from 'react-svg';

import { fromTheme } from '../css_config/mixins';

import media from '../css_config/media';


const StyledHeader = {};

StyledHeader.Nav = styled.nav`
    
    display: flex;  
    justify-content: space-between;
    align-items: center;
    height: 4em;
    position: fixed;
    width:100%;
    z-index:1;
    box-shadow: -2px -2px 7px 4px #000;

    background: ${fromTheme("brown")};
    `

StyledHeader.SVG = styled(ReactSVG)`
    width: 100px;
    margin-top: .5em;
    margin-left: .5em;
    
    .st2 {
        fill: ${fromTheme("white")}
    }
`

StyledHeader.OptionsContainer = styled.div`
    padding-right: 5em;
`

StyledHeader.IconsContainer = styled.div`
    display:none;

    ${media.sm`
        display: block;
    `}
`

export default StyledHeader;