import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { ColorTheme } from '../../../styles/Theme';
import { Button } from '../../../components/Button';
import { font } from '../../../styles/Common';
import { Container } from '../../../components/Container';

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
            <FlexWrapper direction='column' align='center'>
                <SectionTitle title='Contacts' />
                <Description>Want to know more or just chat? You are welcome!</Description>
                <Button btnType='primary'>Send message</Button>
            </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`

`

const Description = styled.p`
margin:20px 0 30px;
    ${font({weight:500, Fmax:18, Fmin:13})};
    max-width:275px;
    width:100%;
    text-align: center;
`
