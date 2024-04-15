import styled, { css } from "styled-components";
import { ColorTheme } from "../styles/Theme";
import { font } from "../styles/Common";

type ButtonPropsType = {
    btnType: "primary" | "outlined"
}
export const Button = styled.button<ButtonPropsType>`
${props => props.btnType === 'primary' && css<ButtonPropsType>`
    background-color: ${ColorTheme.fontcolors.mainfont};
    max-width:180px;
    width:100%;
    height: 42px;
     ${font({weight:600, Fmax:15, Fmin:10})};
    color:${ColorTheme.colors.firstbg};
`}


`


