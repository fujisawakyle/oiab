import React, { Component } from 'react';
import styled from 'styled-components';

import { A, FlexRow } from '../elements';

import fbIcon from '../assets/svg/FB-icon.svg';
import igIcon from '../assets/svg/IG-icon.svg';
import twIcon from '../assets/svg/twitter-icon.svg';

import headerData from '../data/header/header.json';

const IconLink = styled(A)`
    display:flex;
    justify-content: center;
    align-items: center;
`

const Icon = styled.img``

const IconContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    width: 150px;
`

export default class SocialIcons extends Component {
    render() {
        return (
            <FlexRow>
                <IconContainer>
                    <IconLink href={headerData.fbURL}>
                        <Icon src={fbIcon} />
                    </IconLink>
                    <IconLink href={headerData.igURL}>
                        <Icon src={igIcon} />
                    </IconLink>
                    <IconLink href={headerData.twURL}>
                        <Icon src={twIcon} />
                    </IconLink>
                </IconContainer>
            </FlexRow>
        )
    }
}