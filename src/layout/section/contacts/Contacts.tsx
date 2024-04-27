import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { S } from './Contacts_Styles';
import { ElementRef, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contacts: React.FC = () => {

    const [formIsOpen, setFormIsOpen] = useState(false)
    const onContactsBtnClick = () => { setFormIsOpen(!formIsOpen) }

    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
      e.preventDefault();
  
        if (!form.current) return

      emailjs
        .sendForm('service_68stk64', 'template_a7g2sk3', form.current, {
          publicKey: 'zCK8P0LD0iRrefPmC',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    return (
        <S.Contacts id='contacts' isOpen={formIsOpen}>
            <Container>
                <FlexWrapper direction='column' align='center'>
                    <SectionTitle title='Contacts' />
                    <S.Description>Want to know more or just chat? You are welcome!</S.Description>
                    <Button btnType='primary' isOpen={formIsOpen} onClick={onContactsBtnClick}> Send message</Button>
                    <S.ContactsForm isOpen={formIsOpen} ref={form} onSubmit={sendEmail}>
                        <S.ExitButton isOpen={formIsOpen} onClick={() => {setFormIsOpen(false)}} type='button'><span></span></S.ExitButton>
                        <S.FormName htmlFor="user_name"> Имя
                            <S.FormText required type="text" name='user_name' />
                        </S.FormName>
                        <S.FormName htmlFor="subject"> Email
                            <S.FormText required type="email" name='subject' />
                        </S.FormName>
                        <S.FormName htmlFor="message"> Текст обращения
                            <S.FormArea required name="message" id=""></S.FormArea>
                        </S.FormName>
                        <S.SubmitButton type='submit' isOpen={formIsOpen}>Send</S.SubmitButton>
                    </S.ContactsForm>
                </FlexWrapper>
            </Container>
        </S.Contacts>
    );
};
