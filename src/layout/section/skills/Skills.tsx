import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/Container';
import { S } from './Skills_Styles';


export const Skills = () => {
    return (
        <S.Skills>
            <Container>
                <SectionTitle title='Skills' />
                <S.Description>I work in such programs as</S.Description>
                <FlexWrapper direction='column' align='stretch' justify='space-between'>
                    <Skill />
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
}