import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/Container';
import { S } from './Skills_Styles';


export const Skills: React.FC = () => {
    return (
        <S.Skills id='skills'>
            <Container>
                <SectionTitle title='Skills' />
                <S.Description>I work in such programs as</S.Description>
                    <FlexWrapper direction='column' align='stretch' justify='space-between' wrap='wrap'>
                        <Skill />
                    </FlexWrapper>
            </Container>
        </S.Skills>
    );
}