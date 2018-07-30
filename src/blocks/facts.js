import styled from 'styled-components';
import ReactSVG from 'react-svg';

import { P } from '../elements';
import { fromTheme } from '../css_config/mixins';
import media from '../css_config/media';

const StyledFacts = {};

StyledFacts.Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;

    background: ${fromTheme("beige")};
`

StyledFacts.FlexRowToCol = styled.div`
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

StyledFacts.SVG = styled(ReactSVG)`
    order: 0;
    padding: 1em;
    height: auto;
    width: 150px;
    
    ${media.sm`
        order: 1;
        padding: 0 1em;
        width: 180px;
    `}
`

StyledFacts.Text = styled.div`
    order: 1;
    padding: 1em;
    
    text-align: center;

    ${media.sm`
        order: 0;
    `}
`

StyledFacts.TextInvertOrder = styled(StyledFacts.Text)`
    order: -1;
    padding: 1em;

    ${media.sm`
        order: 0;
    `}
`

StyledFacts.DesktopText = styled(P)`
    display: none;

    color: ${fromTheme("black")};

    ${media.sm`
        display: block;
        order: 1;
    `}
`

export default StyledFacts;