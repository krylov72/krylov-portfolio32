import React from 'react';
import styled from 'styled-components';
import { Menu } from '../../components/menu/Menu';
import { Container } from '../../components/Container';
import { MobileMenu } from '../../components/mobileMenu/MobileMenu';



export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Menu />
                <MobileMenu />
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    
`
