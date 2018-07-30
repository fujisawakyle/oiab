import React, { Component } from 'react';

import StyledContentContainer from '../blocks/StyledContentContainer';

import { H1, H3, A, BUTTON, FlexCol, FlexColToRow, SpanHighlight } from '../elements';

import { fromTheme } from '../css_config/mixins';

export default class MediaSection extends Component {
    render() {
        const { backgroundColor, header1, highlight, highlightColor, link1, link2, link3, link1Text, link2Text, link3Text, isButtons } = this.props;
        let renderLinks;
        if (isButtons) {
            renderLinks = (
                <FlexColToRow>
                    <BUTTON href={link1} target="_blank">{link1Text}</BUTTON>
                    <BUTTON href={link2} target="_blank">{link2Text}</BUTTON>
                    <BUTTON href={link3} target="_blank">{link3Text}</BUTTON>
                </FlexColToRow>
            )
        } else {
            renderLinks = (
                <FlexCol backgroundColor={backgroundColor || fromTheme("beige")}>
                    <A href={link1} target="_blank">{link1Text}</A>
                    <A href={link2} target="_blank">{link2Text}</A>
                    <A href={link3} target="_blank">{link3Text}</A>
                </FlexCol>
            )
        }
        return (
            <FlexCol backgroundColor={backgroundColor || fromTheme("beige")}>
                <StyledContentContainer>
                    <H3>{header1}</H3>
                    <H1><SpanHighlight backgroundColor={highlightColor}>{highlight}</SpanHighlight></H1>
                    {renderLinks}
                </StyledContentContainer>
            </FlexCol>
        )
    }
}