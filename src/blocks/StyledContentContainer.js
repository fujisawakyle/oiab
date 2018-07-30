import styled from 'styled-components';

import media from '../css_config/media';

import { fromTheme } from '../css_config/mixins';

const StyledContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: ${props => props.maxWidth || fromTheme("contentMax")};
    padding: ${props => props.yPadding || fromTheme("sectionPaddingY")} ${fromTheme("sectionPaddingX")};
    padding-top: ${props => props.topPadding || fromTheme("sectionPaddingY")};

    ${media.sm`
        padding: 2em 1em;
        padding-top: ${props => props.topPadding || fromTheme("sectionPaddingY")};
    `}
`

export default StyledContentContainer;