import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { font } from "../../../styles/Common"

export const AboutMe = styled.section`
    display:flex;
    justify-content:center;
    position:relative;

    &>${FlexWrapper} {
        max-width:485px;
        width:100%;
    }
`

export const Text = styled.p`
    ${font({weight:400, Fmax:18, Fmin:12, color:'7,7,7'})};
    max-width:485px;
    width:100%;
    margin-top:20px;
`

export const S = {
    AboutMe,
    Text
}