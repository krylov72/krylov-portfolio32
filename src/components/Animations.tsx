import { keyframes } from "styled-components";
import { ColorTheme } from "../styles/Theme";

export const MenuAnimation = keyframes`
    0% {
       transform:translate(0,0);
       border-bottom:1.5px solid transparent;
        transition: border-bottom 1s;
    }
    100% {
        transform:translate(20px);
        border-bottom:1.5px solid ${ColorTheme.fontcolors.secondfont};
        color:${ColorTheme.fontcolors.mainfont};
    }
`

export const MenuAnimationNotHover = keyframes`
    0% {
        transform:translate(20px);
        border-bottom:1.5px solid ${ColorTheme.fontcolors.secondfont};
        color:${ColorTheme.fontcolors.mainfont};
    }
    100% {
        transform:translate(0,0);
       border-bottom:1.5px solid transparent;
        transition: border-bottom 1s;
    }
`