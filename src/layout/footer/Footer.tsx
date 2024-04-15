import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../components/FlexWrapper';
import { IconWrapper } from '../section/skills/skill/Skill';
import { Icon } from '../../components/icon/Icon';
import { Container } from '../../components/Container';
import { ColorTheme } from '../../styles/Theme';

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction='column' align='center'>
                    <SocialWrapper>
                        <Icon iconSrc='linkedin' width='40' height='40' viewbox='-2 -2 45 45' />
                        <Icon iconSrc='ig' width='40' height='40' viewbox='-2 -2 45 45' />
                        <Icon iconSrc='behance' width='40' height='40' viewbox='-2 -2 45 45' />
                        <Icon iconSrc='dribble' width='40' height='40' viewbox='-2 -2 45 45' />
                    </SocialWrapper>
                    <Copyright>Like me on<br />LinkedIn, Instagram, Behance, Dribble</Copyright>
                </FlexWrapper>
            </Container>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
padding:85px 0 123px;


`

const SocialWrapper = styled.div`
    display:flex;
    gap:45px;
    flex-wrap:wrap;
`

const Copyright = styled.small`
    margin-top:45px;
    color: ${ColorTheme.fontcolors.secondfont};
    font-size: 14px;
    font-weight: 400;
    text-align: center;
`