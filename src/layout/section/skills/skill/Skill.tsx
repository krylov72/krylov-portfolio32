import React from 'react';
import styled from 'styled-components';
import PS from '../../../../assets/images/PS.webp';
import AI from '../../../../assets/images/AI.webp';
import AE from '../../../../assets/images/AE.webp';
import FIGMA from '../../../../assets/images/FIGMA.webp';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Icon } from '../../../../components/icon/Icon';


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

export const Skill = () => {
    return (
        <StyledSkill>
            {skillsList.map((item, index) => (
                <FlexWrapper key={index} direction='column' align='center'>
                    <img src={item.src} alt="" />
                    <h4>{item.name}</h4>
                    <Rating value={item.value} />
                </FlexWrapper>
            )
            )}
        </StyledSkill>
    );
};

function Rating(props: any) {
    if (props.value === 1) {
        return (
            <IconWrapper>
                <Icon iconSrc='star' />
                <Icon iconSrc='startrans' />
                <Icon iconSrc='startrans' />
                <Icon iconSrc='startrans' />
                <Icon iconSrc='startrans' />
            </IconWrapper>
        )
    }
    if (props.value === 2) {
        return (
            <IconWrapper>
                <Icon iconSrc='star' />
                <Icon iconSrc='star' />
                <Icon iconSrc='startrans' />
                <Icon iconSrc='startrans' />
                <Icon iconSrc='startrans' />
            </IconWrapper>
        )
    }
    if (props.value === 3) {
        return (
            <IconWrapper>
                <Icon iconSrc='star' />
                <Icon iconSrc='star' />
                <Icon iconSrc='star' />
                <Icon iconSrc='startrans' />
                <Icon iconSrc='startrans' />
            </IconWrapper>
        )
    }
    if (props.value === 4) {
        return (
            <IconWrapper>
                <Icon iconSrc='star' />
                <Icon iconSrc='star' />
                <Icon iconSrc='star' />
                <Icon iconSrc='star' />
                <Icon iconSrc='startrans' />
            </IconWrapper>
        )
    }
    if (props.value === 5) {
        return (
            <IconWrapper>
                <Icon iconSrc='star' color='black' />
                <Icon iconSrc='star' color='black' />
                <Icon iconSrc='star' color='black' />
                <Icon iconSrc='star' color='black' />
                <Icon iconSrc='star' color='black' />
            </IconWrapper>
        )
    }
    return (
        <IconWrapper>
            <Icon iconSrc='star' />
            <Icon iconSrc='star' />
            <Icon iconSrc='star' />
            <Icon iconSrc='star' />
            <Icon iconSrc='star' />
        </IconWrapper>
    )
}

export const StyledSkill = styled.div`
    display:flex;
    flex-direction:row;
    gap:50px;
    flex-wrap:wrap;
    flex-grow:1;

    align-items:center;
    justify-content:center;

    &>${FlexWrapper}{
        gap:25px;
        img{
            max-width:90px;
            width:100%;
            max-height:90px;
            object-fit:contain;
        }
    }
`
export const IconWrapper = styled.div`
    display:flex;
    gap:10px;
`

