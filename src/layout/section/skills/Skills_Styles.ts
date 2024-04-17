

import styled from "styled-components"
import { font } from "../../../styles/Common"
import { ColorTheme } from "../../../styles/Theme"


//Skills
const Skills = styled.section`
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
`
 const IconWrapper = styled.div`
    display:flex;
    gap:10px;
`

export const S = {
    Skills,
    Description,
    Skill,
    IconWrapper
}