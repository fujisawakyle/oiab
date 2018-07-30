import React, { Component } from "react";
import { slide as Menu } from 'react-burger-menu';
import { scroller } from 'react-scroll'

import SocialIcons from '../../components/SocialIcons';

import styles from '../../blocks/navCss';
import StyledNav from '../../blocks/StyledNav';

import headerData from '../../data/header/header.json';
import closingIcon from '../../assets/svg/closingIconWhite.svg';

export default class Nav extends Component {

    state = {
        menuOpen: false
    }

    scrollTo = element => {
        scroller.scrollTo(element, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        })
    }

    // This keeps your state in sync with the opening/closing of the menu
    // via the default means, e.g. clicking the X, pressing the ESC key etc.
    handleStateChange(state) {
        this.setState({ menuOpen: state.isOpen })
    }

    // This can be used to close the menu, e.g. when a user clicks a menu item
    closeMenu() {
        this.setState({ menuOpen: false })
    }

    renderNavLinks = () => {
        return headerData.links.map(link => this.renderLink(link.linkText, link.path))
    }

    renderLink = (linkText, path) => {
        return (
            <div>
                <StyledNav.Link key={path} onClick={() => {
                    this.closeMenu();
                    this.scrollTo(path);
                }} >{linkText}</StyledNav.Link>
                <StyledNav.Divider />
            </div>
        )
    }

    renderSocialLinks = () => {
        return (
            <StyledNav.Footer>
                <SocialIcons />
            </StyledNav.Footer>
        )
    }


    render() {
        return (
            <Menu
                right
                styles={styles}
                isOpen={this.state.menuOpen}
                onStateChange={(state) => this.handleStateChange(state)}
                customCrossIcon={<img style={{ background: 'none' }} src={closingIcon} />}
            >
                <StyledNav.Container>
                    <div>
                        {this.renderNavLinks()}
                    </div>
                    {this.renderSocialLinks()}
                </StyledNav.Container>
            </Menu>
        )
    }
}

