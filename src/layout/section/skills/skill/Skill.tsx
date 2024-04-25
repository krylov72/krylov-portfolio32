import PS from '../../../../assets/images/PS.webp';
import AI from '../../../../assets/images/AI.webp';
import AE from '../../../../assets/images/AE.webp';
import FIGMA from '../../../../assets/images/FIGMA.webp';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Icon } from '../../../../components/icon/Icon';
import { S } from '../Skills_Styles';


const skillsList = [
    {
        id: 0,
        src: PS,
        name: 'Adobe Photoshop',
        value: 5
    },
    {
        id: 1,
        src: AI,
        name: 'Adobe Illustrator',
        value: 2
    },
    {
        id: 2,
        src: AE,
        name: 'Adobe After Effects',
        value: 3
    },
    {
        id: 3,
        src: FIGMA,
        name: 'Figma',
        value: 5
    }
]

export const Skill: React.FC = () => {
    return (
        <S.Skill>
            {skillsList.map((item, id) => (
                     <FlexWrapper key={id} direction='column' align='center' gap='30px'>
                        <img src={item.src} alt="" />
                        <S.SkillText>{item.name}</S.SkillText>
                        <Rating value={item.value} />
                    </FlexWrapper>
            )
            )}
        </S.Skill>
    );
};

function Rating(props: any) {
    if (props.value === 1) {
        return (
            <S.IconWrapper>
                <Icon iconSrc='star' />
                <Icon iconSrc='startrans' />
                <Icon iconSrc='startrans' />
                <Icon iconSrc='startrans' />
                <Icon iconSrc='startrans' />
            </S.IconWrapper>
        )
    }
    if (props.value === 2) {
        return (
            <S.IconWrapper>
                <Icon iconSrc='star' />
                <Icon iconSrc='star' />
                <Icon iconSrc='startrans' />
                <Icon iconSrc='startrans' />
                <Icon iconSrc='startrans' />
            </S.IconWrapper>
        )
    }
    if (props.value === 3) {
        return (
            <S.IconWrapper>
                <Icon iconSrc='star' />
                <Icon iconSrc='star' />
                <Icon iconSrc='star' />
                <Icon iconSrc='startrans' />
                <Icon iconSrc='startrans' />
            </S.IconWrapper>
        )
    }
    if (props.value === 4) {
        return (
            <S.IconWrapper>
                <Icon iconSrc='star' />
                <Icon iconSrc='star' />
                <Icon iconSrc='star' />
                <Icon iconSrc='star' />
                <Icon iconSrc='startrans' />
            </S.IconWrapper>
        )
    }
    if (props.value === 5) {
        return (
            <S.IconWrapper>
                <Icon iconSrc='star' color='black' />
                <Icon iconSrc='star' color='black' />
                <Icon iconSrc='star' color='black' />
                <Icon iconSrc='star' color='black' />
                <Icon iconSrc='star' color='black' />
            </S.IconWrapper>
        )
    }
    return (
        <S.IconWrapper>
            <Icon iconSrc='star' />
            <Icon iconSrc='star' />
            <Icon iconSrc='star' />
            <Icon iconSrc='star' />
            <Icon iconSrc='star' />
        </S.IconWrapper>
    )
}



