import styled from 'styled-components';

import media from '../css_config/media';
import { fromTheme } from '../css_config/mixins';

const StyledLogoList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 25em;

    ${media.sm`
        justify-content: center;
        max-width: 50em;
    `}

`

export default StyledLogoList;