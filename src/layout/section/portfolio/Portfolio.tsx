
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Project } from './project/Project';
import { Container } from '../../../components/Container';
import { S } from './Portfolio_Styles';

export const Portfolio:React.FC = () => {
    return (
        <S.Portfolio>
            <Container>
                <FlexWrapper direction='column' align='center'>
                    <SectionTitle title='Portfolio' />
                    <Project />
                </FlexWrapper>
            </Container>
        </S.Portfolio>
    );
};


        
    