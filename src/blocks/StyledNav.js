import styled from "styled-components";

import { A } from '../elements';

import { fromTheme } from '../css_config/mixins';

const StyledNav = {};

StyledNav.Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

StyledNav.Link = styled(A)`
    margin-bottom: 0.5em;

    color: ${fromTheme("black")};
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;   
`

StyledNav.Divider = styled.div`
    margin: 0.5em auto;
    width: 30px;
    
    border-bottom: 6px solid ${fromTheme("orange")};
`

StyledNav.Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 5em;
    
    background: ${fromTheme("brown")};
`

export default StyledNav;