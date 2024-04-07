import React from 'react';
import styled from 'styled-components';
import { Menu } from '../../components/menu/Menu';

export const Header = () => {
    return (
        <div>
            <StyledHeader>
                <Menu />
            </StyledHeader>
        </div>
    );
};

const StyledHeader = styled.header`
    
`
