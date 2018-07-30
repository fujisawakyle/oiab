import styled from 'styled-components';

import media from '../css_config/media';

const StyledSectionHero = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 600px;
    padding-top: 1em;
    width: 100%;

    background: url(${props => props.backgroundSm}) center center / cover;
    
    text-align: center;

    ${media.sm`
        background: url(${props => props.backgroundLg}) center center / cover;
    `}
`

export default StyledSectionHero;