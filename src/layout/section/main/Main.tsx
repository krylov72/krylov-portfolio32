import React from 'react';
import mainImage from '../../../assets/images/main.webp';
import { Container } from '../../../components/Container';
import { S } from './Main_Styles';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main: React.FC= () => {
    return (
        <S.Main id='home'>
            <Container>
            <S.TextBlock>
                <S.Name>Denis<br></br>Novik</S.Name>
                <S.Description>
                    <p>UX | UI designer,<br/>24 years old, Minsk</p>
                <Typewriter
                        options={{
                            strings: ['UX | UI designer,<br/>24 years old, Minsk'],
                            autoStart: true,
                            loop: true,
                            delay:50,
    
                        }}
                        />
                </S.Description>
                <S.LangSlider>
                    <S.Lang href="">ENG</S.Lang>
                    <S.Lang href="">RU</S.Lang>
                </S.LangSlider>
                </S.TextBlock>
                <Tilt>
                    <S.MainPhoto src={mainImage} />
                </Tilt>
               
            </Container>
                
        </S.Main>
    );
};