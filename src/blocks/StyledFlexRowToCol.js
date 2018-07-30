import styled from 'styled-components';

import media from '../css_config/media';

const StyledFlexRowToCol = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;

    ${media.md`
        flex-direction: column;
        width: 33%;
    `}
`