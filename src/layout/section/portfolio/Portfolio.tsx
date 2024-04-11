import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Project } from './project/Project';
import { Container } from '../../../components/Container';

export const Portfolio = () => {
    return (
        <StyledPortfolio>
            <Container>
                <FlexWrapper direction='column' align='center'>
                    <SectionTitle title='Portfolio' />
                    <Project />
                </FlexWrapper>
            </Container>
        </StyledPortfolio>
    );
};

const StyledPortfolio = styled.section`
    
    `
        
    