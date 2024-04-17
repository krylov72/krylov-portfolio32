import React from 'react';
import mainImage from '../../../assets/images/main.webp';
import { Container } from '../../../components/Container';
import { S } from './Main_Styles';

export const Main: React.FC= () => {
    return (
        <S.Main>
            <Container>
            <S.TextBlock>
                <S.Name>Denis<br></br>Novik</S.Name>
                <S.Description>UX | UI designer<br></br>24 years old, Minsk</S.Description>
                <S.LangSlider>
                    <S.Lang href="">ENG</S.Lang>
                    <S.Lang href="">RU</S.Lang>
                </S.LangSlider>
                </S.TextBlock>
                <S.MainPhoto src={mainImage} />
            </Container>
                
        </S.Main>
    );
};