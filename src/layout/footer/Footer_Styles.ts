import styled from "styled-components"
import { font } from "../../styles/Common"
import { ColorTheme } from "../../styles/Theme"

const Footer = styled.footer`


`

const SocialWrapper = styled.div`
    display:flex;
    gap:20px 40px;
    flex-wrap:wrap;
    justify-content:center;
    flex-grow:1;
`

const Copyright = styled.small`
    margin-top:45px;
    ${font({weight:400, Fmax:14, Fmin:11})};
    color: ${ColorTheme.fontcolors.secondfont};
    text-align: center;
`

const SocialLink = styled.a`
`

export const S = {
    Footer,
    SocialWrapper,
    Copyright,
    SocialLink
}