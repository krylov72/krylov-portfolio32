import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/Container';
import { ColorTheme } from '../../../theme/Theme';

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
padding-bottom:105px;
`

const Description = styled.p`
    margin:70px 0 84px;
    color: ${ColorTheme.fontcolors.mainfont};
    font-size: 18px;
    font-weight: 500;
`

const SkillsWrapper = styled.div`
    
`