import React from 'react';
import styled from 'styled-components';
import pj1 from '../../../../assets/images/project-1.webp';
import pj2 from '../../../../assets/images/project 2.webp';
import pj3 from '../../../../assets/images/project 3.webp';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { ColorTheme } from '../../../../theme/Theme';


const projectItem = [
    {
        src: pj1,
        name:'Online fashion store - Homepage'
    },
    {
        src: pj2,
        name:'Reebok Store - Concept'
    },
    {
        src: pj3,
        name:'Braun Landing Page - Concept'
    },
]

export const Project = () => {
    return (
        <StyledProject>
            {projectItem.map((item,index) => (
            <FlexWrapper key={index} direction='column' align='center'>
                <ProjectImg src={item.src} alt="" />
                <ProjectName href="">{item.name}</ProjectName>
            </FlexWrapper>   
            ))}
            
        </StyledProject>
    );
};

export const StyledProject = styled.div`
    margin-top:50px;
`

export const ProjectImg = styled.img`
    width: 936px;
    height: 522px;
`

export const ProjectName = styled.a`
margin:45px 0 100px;
    color: ${ColorTheme.fontcolors.mainfont};
    font-size: 18px;
    font-weight: 600;
    text-decoration-line: underline;
`
