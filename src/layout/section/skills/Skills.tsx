import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/Container';
import { ColorTheme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';

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
    ${font({weight:500, Fmax:18, Fmin:13})};
    margin:70px 0 84px;
    color: ${ColorTheme.fontcolors.mainfont};

    @media ${ColorTheme.media.tablet} {
        margin:40px 0 50px;
    }
`

const SkillsWrapper = styled.div`
display:block;
`