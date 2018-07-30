import styled from 'styled-components';

import { H1, P } from '../elements';
import * as variables from '../css_config/variables';
import bgImgSm from '../assets/img/OinaB-hero-sm.jpg';

const StyledHero = {};

StyledHero.Image = styled.div`
    background: url(${bgImgSm}) no-repeat center center / cover;
    height: 15em;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`

export default StyledHero