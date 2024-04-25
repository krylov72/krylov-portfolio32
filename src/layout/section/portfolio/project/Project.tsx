import pj1 from '../../../../assets/images/project-1.webp';
import pj2 from '../../../../assets/images/project 2.webp';
import pj3 from '../../../../assets/images/project 3.webp';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { S } from '../Portfolio_Styles';
import { Fade } from 'react-awesome-reveal';


const projectItem = [
    {
        src: pj1,
        name: 'Online fashion store - Homepage'
    },
    {
        src: pj2,
        name: 'Reebok Store - Concept'
    },
    {
        src: pj3,
        name: 'Braun Landing Page - Concept'
    },
]

export const Project:React.FC = () => {
    return (
        <S.Project>
            {projectItem.map((item, index) => (
                <FlexWrapper key={index} direction='column' align='center'>
                    <Fade delay={50}>
                        <S.ProjectImg src={item.src} alt="" />
                    </Fade>
                    <S.ProjectName href="">{item.name}</S.ProjectName>
                </FlexWrapper>
            ))}

        </S.Project>
    );
};