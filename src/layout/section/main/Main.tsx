import React from 'react';
import styled from 'styled-components';
import mainImage from '../../../assets/images/main.webp';

export const Main = () => {
    return (
        <div>
            <StyledMain>
                <TextBlock>
                <Name>Denis Novik</Name>
                <Description>UX | UI designer 24 years old, Minsk</Description>
                <LangSlider>
                    <Lang href="">RU|ENG</Lang>
                </LangSlider>
                </TextBlock>
                <MainPhoto src={mainImage} />
            </StyledMain>
        </div>
    );
};

const StyledMain = styled.main`
    min-height:100vh;
    display:block;
    justify-content:space-between;
    align-items:center;

`
const TextBlock = styled.div`
    display:flex;
    justify-content:space-between;
`
const Name = styled.h2`
    
`
const Description = styled.p`
    
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