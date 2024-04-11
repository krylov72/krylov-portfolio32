import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../components/FlexWrapper';
import { IconWrapper } from '../section/skills/skill/Skill';
import { Icon } from '../../components/icon/Icon';
import { Container } from '../../components/Container';

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction='column' align='center'>
                    <IconWrapper>
                        <Icon iconSrc='linkedin' width='40' height='40' viewbox='-2 -2 45 45' />
                        <Icon iconSrc='ig' width='40' height='40' viewbox='-2 -2 45 45' />
                        <Icon iconSrc='behance' width='40' height='40' viewbox='-2 -2 45 45' />
                        <Icon iconSrc='dribble' width='40' height='40' viewbox='-2 -2 45 45' />
                    </IconWrapper>
                    <small>Like me on LinkedIn, Instagram, Behance, Dribble</small>
                </FlexWrapper>
            </Container>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    
`
