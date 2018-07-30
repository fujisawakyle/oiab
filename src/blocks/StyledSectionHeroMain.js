import styled from 'styled-components';

import StyledSectionHero from './StyledSectionHero';
import media from '../css_config/media';

const StyledSectionHeroMain = styled(StyledSectionHero)`
    justify-content: flex-end;
    height: 25em;
    
    background: url(${props => props.backgroundSm}) no-repeat right center / cover;

    ${media.sm`
        height: 35em;        
        
        background: url(${props => props.backgroundLg}) no-repeat center center / cover;
    `}
`

export default StyledSectionHeroMain;