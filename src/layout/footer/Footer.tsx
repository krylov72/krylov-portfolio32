import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Icon } from '../../components/icon/Icon';
import { Container } from '../../components/Container';
import { ColorTheme } from '../../styles/Theme';
import { font } from '../../styles/Common';

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


`

const SocialWrapper = styled.div`
    display:flex;
    gap:20px 40px;
    flex-wrap:wrap;
    justify-content:center;
    flex-grow:1;
`

const Copyright = styled.small`
    margin-top:45px;
    ${font({weight:400, Fmax:14, Fmin:11})};
    color: ${ColorTheme.fontcolors.secondfont};
    text-align: center;
`