import React from 'react';
import styled from 'styled-components';
import mainImage from '../../../assets/images/main.webp';
import { Container } from '../../../components/Container';
import { ColorTheme } from '../../../theme/Theme';

export const Main = () => {
    return (
        <StyledMain>
            <Container>
            <TextBlock>
                <Name>Denis<br></br>Novik</Name>
                <Description>UX | UI designer<br></br>24 years old, Minsk</Description>
                <LangSlider>
                    <Lang href="">RU|ENG</Lang>
                </LangSlider>
                </TextBlock>
                <MainPhoto src={mainImage} />
            </Container>
                
        </StyledMain>
    );
};

const StyledMain = styled.main`
    min-height:60vh;
    display:block;
    justify-content:space-between;
    align-items:center;
    padding-top:40px;

`
const TextBlock = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-bottom:30px;
`
const Name = styled.h2`
    color: ${ColorTheme.fontcolors.mainfont};
    font-size: 47px;
    font-weight: 800;
    line-height: -1px;
    text-align: left;
`
const Description = styled.h1`
    color: ${ColorTheme.fontcolors.mainfont};
    font-size: 18px;
    font-weight: 400;
    line-height: -1px;
    align-self:flex-end;
    text-align:center;
`
const LangSlider = styled.div`
    
`
const Lang = styled.a`
    writing-mode:vertical-rl;
    transform:rotate(180deg)
`

const MainPhoto = styled.img`
    width:944px;
    height: 387px;
    object-fit:cover;
    object-position: 0 44%;

`