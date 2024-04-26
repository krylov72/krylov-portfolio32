import styled from "styled-components"
import { ColorTheme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"
import { MenuAnimation, MenuAnimationNotHover, ProjectAnimation } from "../../../components/Animations"

const Portfolio = styled.section`
    
    `

const Project = styled.div`
margin-top:50px;

`

const ProjectImg = styled.img`
position:relative;
max-width: 936px;
width:100%;
max-height: 522px;
height:100%;
object-fit:cover;
box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
z-index:1;

@media ${ColorTheme.media.tablet} {
    padding:0 10px;
}
`

const ProjectName = styled.a`
margin:45px 0 100px;
${font({ weight: 600, Fmax: 18, Fmin: 13 })};
text-decoration-line: underline;

&:hover{
    animation: ${ProjectAnimation} 0.2s ease-in-out;
    animation-fill-mode:forwards;
}
&:not(:hover) {
    animation: ${MenuAnimationNotHover} .2s ease-in-out;
}

@media ${ColorTheme.media.mobile} {
    margin: 30px 0 60px;
}
`

export const S = {
    Portfolio,
    Project,
    ProjectImg,
    ProjectName
}