import styled from 'styled-components';
import media from '../css_config/media';
import ReactSVG from 'react-svg';

import { fromTheme } from "../css_config/mixins";

export const H1 = styled.h1`
    margin: 0 auto;
    margin-bottom: .5em;
    
    color: ${fromTheme("white")};
    font-family: "Futura";
    font-weight: bold;
    font-size: ${fromTheme("h1FontSizeMobile")};
    line-height: ${fromTheme("lineHeight")};
    text-transform: uppercase; 

    max-width: 800px;

    ${media.sm`
        font-size: ${fromTheme("h1FontSizeDesktop")};
    `}
`

export const H2 = styled.h2`
    margin-bottom: 0.5em;
    
    color: ${fromTheme("white")};
    font-family: ${fromTheme("h2Font")};
    font-size: ${fromTheme("$h2FontSizeMobile")};
    font-weight: bold;
    line-height: ${fromTheme("lineHeight")};
    text-align: center;
    text-shadow: 1px 1px #000;

    ${media.sm`
        font-size: ${fromTheme("h2FontSizeDesktop")};
    `}
`

export const H3 = styled.h3`
    margin-bottom: 0.5em;
    
    color: ${fromTheme("black")};
    font-weight: bold;
    font-family: ${fromTheme("h3Font")};
    font-size: ${fromTheme("h3FontSizeMobile")};
    text-transform: uppercase;
    text-align: center;

    ${media.sm`
        font-size: ${fromTheme("h3FontSizeDesktop")};
    `}
`

export const H4 = styled.h4`
    margin-bottom: 0.5em;

    color: ${fromTheme("white")};
    text-transform: uppercase;
`

export const H5 = styled.h5`
    margin-bottom: 0.5em;

    color: ${fromTheme("brown")};
`

export const P = styled.p`
    margin-top: ${props => props.marginTop || "0"};
    margin-bottom: 0.5em;
    
    color: ${props => props.color || fromTheme("brown")};
    font-family: "Source Sans Pro";
    font-size: ${fromTheme("pFontSizeMobile")};
    font-weight: ${props => props.weight || "normal"};
    line-height: ${fromTheme("lineHeight")};
    text-align: ${props => props.align || 'left'};

    ${media.sm`
        font-size: ${fromTheme("pFontSizeDesktop")};
    `}
`

export const HR = styled.hr`
    height: 5px;
    margin: 0;
    
    background: ${fromTheme("orange")};
    border: none;

    ${media.sm`
        height: 10px;
    `}
`

export const A = styled.a`
    font-family: ${fromTheme("linkFont")};
    font-size: ${fromTheme("pFontSizeMobile")};
    line-height: ${fromTheme("lineHeight")};
    text-decoration: underline;
    
    cursor: pointer;

    ${media.sm`
        font-size: ${fromTheme("pFontSizeDesktop")};
    `}
`

export const NAVANCHOR = styled.a`
    display: block;
    position: relative;
    top: -4em;
    visibility: hidden;
`

export const BUTTON = styled.a`
    margin: .5em;
    margin-top: ${props => props.marginTop};
    padding: 1em 2em;
    text-transform: uppercase;
    
    background: ${fromTheme("red")};
    border-radius: 6px;
    
    color: ${fromTheme("white")};
    font-family: ${fromTheme("linkFont")};
    font-size: ${fromTheme("buttonFontSizeMobile")};
    font-weight: bold;

    ${media.sm`
        font-size: ${fromTheme("buttonFontSizeDesktop")};
    `}
`

export const MODALBUTTON = styled(BUTTON)`
    height:150px;
    margin-bottom: 1em;

    ${media.sm`
        display: none;
    `}
`

export const FOOTNOTE = styled(P)`
    color: ${fromTheme("white")};
    font-size: ${fromTheme('footnoteFontSize')};
    text-align: center;
`

export const FOOTNOTELINK = styled(A)`
    color: ${fromTheme('brown')};
    font-size: ${fromTheme('footnoteFontSize')};
    font-style:  italic;
    font-weight: 600;
    text-align: center;
`

export const QUOTE = styled(P)`
    height: 60px;
    margin-bottom: 0;
    
    color: ${fromTheme("orange")};
    font-size: 4em;
    font-weight: bold;
    text-transform: uppercase;
`

export const SVG = styled(ReactSVG)`
    width: ${props => props.widthMobile};

    ${media.sm`
        width: ${props => props.widthDesktop};
    `}
`

export const ActionIcon = styled.img`
    width: 75px;
    padding: 1em 0;
`

export const FlexCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.justifyContent || "center"};
    align-items: center;
    height: ${props => props.height || "auto"};
    width: 100%;
    padding: ${props => props.padding || "0"};

    background: ${props => props.backgroundColor || fromTheme("white")};
`

export const FlexRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    ${media.sm`
        align-items: ${props => props.alignItems || "center"};
    `}
`

export const FlexColToRow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    ${media.sm`
        flex-direction: row;
        align-items: ${props => props.alignItems || "center"};
    `}

`

export const Chevron = styled.div`
    position: relative;
    align-self: flex-start;
    height: 0;
    width: calc(50% - 32.5px);
    
    border-bottom: 17px solid ${ props => props.color || fromTheme("white")};
    border-right: 32.5px solid transparent;
    
    text-align: left;

    &::before {
        content: '';
        position: absolute;
        height: 0;
        width: 100%;
        
        border-bottom: 17px solid ${ props => props.color || fromTheme("white")};
        border-left: 32.5px solid transparent;
        
        transform: translateX(100%);
    }

    ${media.sm`
        width: calc(50% - 92.5px);
        
        border-bottom: 40px solid ${ props => props.color || fromTheme("white")};
        border-right: 92.5px solid transparent;

        &::before {
            border-bottom: 40px solid ${ props => props.color || fromTheme("white")};
            border-left: 92.5px solid transparent;
    }
    `}
`

export const SpanHighlight = styled.span`
    padding: .3em;

    background: ${props => props.backgroundColor || fromTheme("orange")};
`

export const CommitmentLogo = styled.img`
    height: 50px; 
    padding: .5em; 
    max-width: 115px;

    ${media.sm`
        padding: .5em 1em;
        height: 100px;
        max-width: 220px;
    `}
`