import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/Container';

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <FlexWrapper direction='column' align='center'>
                    <SectionTitle title='Skills' />
                    <Description>I work in such programs as</Description>
                    <SkillsWrapper>
                        <Skill />
                    </SkillsWrapper>
                </FlexWrapper>
            </Container>

        </StyledSkills>
    );
};


const StyledSkills = styled.section`
    
`

const Description = styled.p`
    
`

const SkillsWrapper = styled.div`
    
`