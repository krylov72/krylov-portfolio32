import React from 'react';
import styled from 'styled-components';
import pj1 from '../../../../assets/images/project-1.webp';
import pj2 from '../../../../assets/images/project 2.webp';
import pj3 from '../../../../assets/images/project 3.webp';
import { FlexWrapper } from '../../../../components/FlexWrapper';


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
            <FlexWrapper key={index} direction='column' align='center' gap='45px'>
                <ProjectImg src={item.src} alt="" />
                <a href="">{item.name}</a>
            </FlexWrapper>   
            ))}
            
        </StyledProject>
    );
};

export const StyledProject = styled.div`
    
`

export const ProjectImg = styled.img`
    width: 936px;
    height: 522px;
`
