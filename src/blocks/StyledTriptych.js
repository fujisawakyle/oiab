import styled from 'styled-components';
import media from '../css_config/media';

import { fromTheme } from '../css_config/mixins';

const StyledTriptych = styled.div`
    display: flex;
    flex-direction: ${props => props.mobileDirection || "column"};
    justify-content: ${props => props.justifyContent || "center"};
    align-items: center;
    height: auto;
    width: 100%;
    padding: 1em 0;
    
    background: ${props => props.backgroundColor || fromTheme("beige")};

    ${media.sm`
        flex-direction: column;
        height: ${props => props.height || "auto"};
        width:33%;
        padding: 1em 1em;
        
        background: ${fromTheme("beige")};
    `}
`

export default StyledTriptych;