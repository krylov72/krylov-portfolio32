import React from 'react';
import styled from 'styled-components';
import { ColorTheme } from '../theme/Theme';

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
    color: ${ColorTheme.fontcolors.mainfont};
    font-size: 34px;
    font-weight: 700;
    text-align: center;
`