import React, { Component } from "react";
import { fallDown as Modal } from 'react-burger-menu';

import styles from '../../blocks/modalCss';
import StyledSection from '../../blocks/StyledSection';
import StyledContentContainer from '../../blocks/StyledContentContainer';

import { H1, H3, P, BUTTON, SpanHighlight } from '../../elements';

import petitionData from '../../data/petition/petition.json';
import closingIcon from '../../assets/svg/closingIconBlack.svg';

import { fromTheme } from "../../css_config/mixins";

export default class FactsModal extends Component {

    state = {
        menuOpen: false
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

    render() {
        return (
            <div style={{ position: 'relative' }}>
                <Modal
                    styles={styles}
                    isOpen={this.state.menuOpen}
                    onStateChange={(state) => this.handleStateChange(state)}
                    customBurgerIcon={this.props.modalButton}
                    customCrossIcon={<img style={{ background: 'none' }} src={closingIcon} />}
                >
                    <StyledSection>
                        <H3>{petitionData.modalHeader}</H3>
                        <H1><SpanHighlight backgroundColor={fromTheme("black")}>{petitionData.modalHeaderName}</SpanHighlight></H1>
                        <StyledContentContainer>
                            <P>{petitionData.petitionText}</P>
                        </StyledContentContainer>
                        <BUTTON href={petitionData.petitionLink} target="_blank">{petitionData.buttonText}</BUTTON>
                    </StyledSection>
                </Modal>
            </div>
        )
    }
}