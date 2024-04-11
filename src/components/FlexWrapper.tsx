import styled from "styled-components";


type FlexWrapperPropsType = {
    justify?: string
    align?: string
    wrap?: string
    gap?: string
    direction?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display:flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'flex-start'} ;
    align-items: ${props => props.align || 'flex-start'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    gap: ${props => props.gap || '0px'};
`