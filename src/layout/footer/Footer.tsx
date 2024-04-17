import React from 'react';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Icon } from '../../components/icon/Icon';
import { Container } from '../../components/Container';
import { S } from './Footer_Styles';

const iconItem = [
    {
        iconSrc: 'linkedin'
    },
    {
        iconSrc: 'ig'
    },
    {
        iconSrc: 'behance'
    },
    {
        iconSrc: 'dribble'
    },
]
    


export const Footer:React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper direction='column' align='center'>
                    <S.SocialWrapper>
                        {iconItem.map((s,index) => {
                            return <S.SocialLink key={index}>
                                    <Icon iconSrc={s.iconSrc} width='40' height='40' viewbox='-2 -2 45 45' />
                            </S.SocialLink>
                        })}
                    </S.SocialWrapper>
                    <S.Copyright>Like me on<br />LinkedIn, Instagram, Behance, Dribble</S.Copyright>
                </FlexWrapper>
            </Container>

        </S.Footer>
    );
};

