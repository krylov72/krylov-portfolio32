import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { S } from './Contacts_Styles';
import { useState } from 'react';

export const Contacts: React.FC = () => {

    const [formIsOpen, setFormIsOpen] = useState(false)
    const onContactsBtnClick = () => { setFormIsOpen(!formIsOpen) }

    return (
        <S.Contacts id='contacts' isOpen={formIsOpen}>
            <Container>
                <FlexWrapper direction='column' align='center'>
                    <SectionTitle title='Contacts' />
                    <S.Description>Want to know more or just chat? You are welcome!</S.Description>
                    <Button btnType='primary' isOpen={formIsOpen} onClick={onContactsBtnClick}> Send message</Button>
                    <S.ContactsForm isOpen={formIsOpen} onClick={() => {setFormIsOpen(false)}}>
                        <S.FormName htmlFor="name"> Имя
                            <S.FormText type="text" name='name' />
                        </S.FormName>
                        <S.FormName htmlFor="email"> Email
                            <S.FormText type="email" name='email' />
                        </S.FormName>
                        <S.FormName htmlFor="question"> Текст обращения
                            <S.FormArea name="question" id=""></S.FormArea>
                        </S.FormName>
                    </S.ContactsForm>
                </FlexWrapper>
            </Container>
        </S.Contacts>
    );
};
