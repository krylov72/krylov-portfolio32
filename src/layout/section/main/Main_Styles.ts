import styled from "styled-components"
import { ColorTheme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"

const Main = styled.main`
    min-height:60vh;
    display:block;
    justify-content:space-between;
    align-items:center;
    padding-top:33px;
`
const TextBlock = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-bottom:30px;
`
const Name = styled.h2`
    ${font({weight:800, Fmax:47, Fmin:30})};
    text-align: left;
`
const Description = styled.h1`
    ${font({weight:400, Fmax:18, Fmin:12})};
    align-self:flex-end;
    text-align:center;
    margin-bottom:11px;
`
const LangSlider = styled.div`
    display:flex;
    flex-direction:column;
    gap:5px;
    align-self:flex-end;
    margin-bottom:14px;
`
const Lang = styled.a`
${font({weight:400, Fmax:16, Fmin:12})};
    writing-mode:vertical-rl;
    color: ${ColorTheme.fontcolors.secondfont};
    transform:rotate(180deg);
`

const MainPhoto = styled.img`
    max-width:944px;
    width:100%;
    max-height: 387px;
    object-fit:cover;
    object-position: 0 44%;
    margin:11px 0 0 13px;
`

export const S = {
    Main,
    TextBlock,
    Name,
    Description,
    LangSlider,
    Lang,
    MainPhoto
}
