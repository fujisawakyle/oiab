import styled from 'styled-components';

import media from '../css_config/media';

import { fromTheme } from '../css_config/mixins';

const StyledColToRow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${props => props.alignItems || "center"};
    width:100%;
    max-width: ${fromTheme("contentMax")};

    ${media.sm`
        flex-direction: row;
       
    `}
`

export default StyledColToRow;