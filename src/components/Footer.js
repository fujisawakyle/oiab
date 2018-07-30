import React, { Component } from "react";

import StyledContentContainer from "../blocks/StyledContentContainer";
import StyledSection from "../blocks/StyledSection";

import { FOOTNOTE, SVG } from "../elements";

import { fromTheme } from "../css_config/mixins";

import footerData from "../data/footer/footer.json";

import logo from "../assets/svg/THL18-UK-horiz-logo-white.svg";

export default class Footer extends Component {
    render() {
        return (
            <StyledSection backgroundColor={fromTheme("brown")}>
                <StyledContentContainer maxWidth={fromTheme("contentMaxConstained")}>
                    <img
                        src={logo}
                    />
                    <FOOTNOTE>{footerData.body}</FOOTNOTE>
                </StyledContentContainer>
            </StyledSection>
        )
    }
}