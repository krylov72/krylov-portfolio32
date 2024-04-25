import React from 'react';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import styled from 'styled-components';
import { font } from '../../../styles/Common';
import { Container } from '../../../components/Container';
import { S } from './AboutMe_Styles';

export const AboutMe:React.FC = () => {
    return (
        <S.AboutMe id='about me'>
            <Container>
            <FlexWrapper justify='center' direction='column' align='center' >
                <SectionTitle title='About me' />
                <S.Text>Hi, I'm Denis – UX/UI designer from Minsk.<br/>I'm interested in design and everything connected with it.<br></br><br />I'm studying at courses "Web and mobile design interfaces" in IT-Academy.<br /><br /><br />Ready to implement excellent projects with wonderful people.</S.Text>
            </FlexWrapper>
            </Container>
            
        </S.AboutMe>
    );
};



