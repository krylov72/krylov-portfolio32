import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { S } from './Contacts_Styles';

export const Contacts:React.FC = () => {
    return (
        <S.Contacts id='contacts'>
            <Container>
            <FlexWrapper direction='column' align='center'>
                <SectionTitle title='Contacts' />
                <S.Description>Want to know more or just chat? You are welcome!</S.Description>
                <Button btnType='primary'>Send message</Button>
            </FlexWrapper>
            </Container>
        </S.Contacts>
    );
};
