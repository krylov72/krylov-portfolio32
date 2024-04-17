import React from 'react';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import styled from 'styled-components';
import { font } from '../../../styles/Common';
import { Container } from '../../../components/Container';


export const AboutMe:React.FC = () => {
    return (
        <StyledAboutMe>
            <Container>
            <FlexWrapper justify='center' direction='column' align='center' >
                <SectionTitle title='About me' />
                <Text>Hi, I'm Denis – UX/UI designer from Minsk.<br/>I'm interested in design and everything connected with it.<br></br><br />I'm studying at courses "Web and mobile design interfaces" in IT-Academy.<br /><br /><br />Ready to implement excellent projects with wonderful people.</Text>
            </FlexWrapper>
            </Container>
            
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    display:flex;
    justify-content:center;

    &>${FlexWrapper} {
        max-width:485px;
        width:100%;
    }
`

export const Text = styled.p`
    ${font({weight:400, Fmax:18, Fmin:12, color:'7,7,7'})};
    max-width:485px;
    width:100%;
    margin-top:20px;
`

