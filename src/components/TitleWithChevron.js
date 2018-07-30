import React, { Component } from 'react';
import styled from 'styled-components';

import { H1, Chevron } from '../elements';

import { fromTheme } from '../css_config/mixins';

const TitleContainer = styled.div`
    width: 100%;
    padding-top: .75em;
    
    background: ${fromTheme("orange")};
    
    color: ${fromTheme("white")};
    text-align: center;
`

export default class TitleWithChevron extends Component {
    render() {
        const { title, chevronColor } = this.props
        return (
            <TitleContainer>
                <H1>{title}</H1>
                <Chevron
                    color={chevronColor}
                />
            </TitleContainer>
        )
    }
}