import React, { Component } from "react";
import styled from "styled-components";

import { P, FlexCol, FlexRow, QUOTE } from "../elements";

import { fromTheme } from "../css_config/mixins";
import media from "../css_config/media";

const LogoLine = styled.span`
    border-bottom: 2px solid ${fromTheme("orange")};
    width: 30px;
    margin: 1em .5em;

    ${media.xs`
        width: 80px;
        margin: 1em 1em;
    `}

    ${media.sm`
        width: 50px;
    `}

    ${media.md`
        width: 80px;
    `}
`

const Logo = styled.img`
    margin: 1em 0;

    max-width: 100px;

    ${media.xs`
        max-width: 150px;
    `}

    ${media.sm`
        max-width: 150px;
    `}
`

export default class Quote extends Component {

    renderLogo = (logo) => {
        return (
            <FlexRow>
                <LogoLine />
                <Logo src={logo} />
                <LogoLine />
            </FlexRow>
        )
    }

    render() {
        const { quote, logo } = this.props
        return (
            <FlexCol>
                <QUOTE>&ldquo;</QUOTE>
                <P align={"center"}>{quote}</P>
                {this.renderLogo(logo)}
            </FlexCol>
        )
    }
}