import { FlexWrapper } from './../../../components/FlexWrapper';


import styled from "styled-components"
import { font } from "../../../styles/Common"
import { ColorTheme } from "../../../styles/Theme"
import { JackInTheBox } from 'react-awesome-reveal';


//Skills
const Skills = styled.section`
position:relative;
`

const Description = styled.p`
    ${font({ weight: 500, Fmax: 18, Fmin: 13 })};
    margin:70px 0 84px;
    color: ${ColorTheme.fontcolors.mainfont};
    display:flex;
    justify-content:center;
    @media ${ColorTheme.media.tablet} {
        margin:40px 0 50px;
    }
`

//Skill
 const Skill = styled.div`
    display:flex;   
    justify-content:space-between;
    flex-wrap:wrap;
    row-gap:60px;

    &>${FlexWrapper} {
        padding:15px;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    }
`
 const IconWrapper = styled.div`
    display:flex;
    gap:10px;
`

const SkillText = styled.h4`
`

export const S = {
    Skills,
    Description,
    Skill,
    IconWrapper,
    SkillText
}