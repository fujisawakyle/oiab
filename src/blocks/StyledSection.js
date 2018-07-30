import styled from 'styled-components';

import media from '../css_config/media';
import { fromTheme } from '../css_config/mixins';

const StyledSection = styled.div`
    display: ${props => props.displayMobile || "flex"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    background: ${props => props.backgroundColor || fromTheme("white")};

    ${media.sm`
        display: flex;
    `}

`

export default StyledSection;