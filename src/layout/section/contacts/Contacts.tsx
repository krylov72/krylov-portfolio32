import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { ColorTheme } from '../../../theme/Theme';

export const Contacts = () => {
    return (
        <StyledContacts>
            <FlexWrapper direction='column' align='center'>
                <SectionTitle title='Contacts' />
                <Description>Want to know more or just chat? You are welcome!</Description>
                <Button href="">Send message</Button>
            </FlexWrapper>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`

`

const Description = styled.p`
margin:20px 0 30px;
    max-width:275px;
    width:100%;
    color: ${ColorTheme.fontcolors.mainfont};
    font-size: 18px;
    font-weight: 500;
    text-align: center;
`

const Button = styled.a`
`