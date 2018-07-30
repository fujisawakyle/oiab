import React, { Component } from "react";
import Link from "gatsby-link";

import Nav from "./burgerMenu/Nav";
import SocialIcons from "./SocialIcons";

import StyledHeader from "../blocks/header";

import OIABLogo from "../assets/svg/OIABLogo.svg";


export default class Header extends Component {

    render() {
        return (
            <StyledHeader.Nav>
                <Link to="/">
                    <StyledHeader.SVG path={OIABLogo} />
                </Link>
                <StyledHeader.OptionsContainer>
                    <StyledHeader.IconsContainer>
                        <SocialIcons />
                    </StyledHeader.IconsContainer>
                    <Nav />
                </StyledHeader.OptionsContainer>

            </StyledHeader.Nav>
        )
    }
}