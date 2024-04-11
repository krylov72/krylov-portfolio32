import React from 'react';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import styled from 'styled-components';

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <FlexWrapper justify='center' direction='column' align='center' >
                <SectionTitle title='About me' />
                <Text>Hi, I'm Denis – UX/UI designer from Minsk.I'm interested in design and everything connected with it.<br></br><br /><br />I'm studying at courses "Web and mobile design interfaces" in IT-Academy.<br /><br /><br />Ready to implement excellent projects with wonderful people.</Text>
            </FlexWrapper>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    padding-top:120px;
    display:flex;
    justify-content:center;
    &>${FlexWrapper} {
        max-width:485px;
        width:100%;
    }
`

export const Text = styled.p`
    color: rgb(7, 7, 7);
    font-size: 18px;
    font-weight: 400;
    line-height: -1px;
`

