import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';

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
    
`

const Button = styled.a`
    
`