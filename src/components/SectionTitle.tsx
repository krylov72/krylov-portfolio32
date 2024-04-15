import React from 'react';
import styled from 'styled-components';
import { ColorTheme } from '../styles/Theme';
import { font } from '../styles/Common';

type StyledTitlePropsType = {
    title: string
}

export const SectionTitle = (props: StyledTitlePropsType) => {
    return (
        <div>
           <StyledTitle>{props.title}</StyledTitle> 
        </div>
    );
};


export const StyledTitle = styled.h3`
    ${font({weight:700, Fmax:34, Fmin:22})};
    color: ${ColorTheme.fontcolors.mainfont};
    text-align: center;
`