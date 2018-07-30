import React, { Component } from 'react';
import styled from 'styled-components';

import StyledSectionHero from '../blocks/StyledSectionHero';
import StyledSectionHeroMain from '../blocks/StyledSectionHeroMain';
import StyledContentContainer from '../blocks/StyledContentContainer';

import { H1, H2, Chevron, SpanHighlight } from '../elements';
import media from '../css_config/media';
import { fromTheme } from '../css_config/mixins';

const StyledH1 = styled(H1)`
    position: relative;
    
    margin-bottom: 0;

    ${media.sm`
        position: absolute;
        top: 4em;
        left: 50%;
    `}
`

export default class SectionHero extends Component {
    render() {
        const { backgroundSm, backgroundLg, header1, highlighted, header2, chevronColor, isMain } = this.props
        let renderSection;

        if (isMain) {
            renderSection = (
                <StyledSectionHeroMain
                    backgroundSm={backgroundSm}
                    backgroundLg={backgroundLg}
                >
                    <div>
                        <StyledH1>{header1} <SpanHighlight backgroundColor={fromTheme("orange")}>{highlighted}</SpanHighlight></StyledH1>
                        <StyledContentContainer maxWidth={fromTheme("contentMaxConstained")} >
                            <H2>{header2}</H2>
                        </StyledContentContainer>
                    </div>
                    <Chevron color={chevronColor} />
                </StyledSectionHeroMain>
            )
        } else {
            renderSection = (
                <StyledSectionHero
                    backgroundSm={backgroundSm}
                    backgroundLg={backgroundLg}

                >
                    <div>
                        <H1>{header1}</H1>
                        <H1><SpanHighlight backgroundColor={fromTheme("orange")}>{highlighted}</SpanHighlight></H1>
                        <H2>{header2}</H2>
                    </div>
                    <Chevron color={chevronColor} />
                </StyledSectionHero>
            )
        }

        return (
            <div style={{ width: "100%" }}>
                {renderSection}
            </div>

        )
    }
}