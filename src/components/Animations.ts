import { keyframes } from "styled-components";
import { ColorTheme } from "../styles/Theme";

export const MenuAnimation = keyframes`
    0% {
       transform:scale(1);
       border-bottom:1.5px solid transparent;
        transition: border-bottom 1s;
    }
    100% {
        transform:scale(1.1);
        border-bottom:1.5px solid ${ColorTheme.fontcolors.secondfont};
        color:${ColorTheme.fontcolors.mainfont};
    }
`

export const MenuAnimationNotHover = keyframes`
    0% {
        transform:scale(1.1);
        border-bottom:1.5px solid ${ColorTheme.fontcolors.secondfont};
        color:${ColorTheme.fontcolors.mainfont};
    }
    100% {
        transform:scale(1);
       border-bottom:1.5px solid transparent;
        transition: border-bottom 1s;
    }
`

export const ProjectAnimation = keyframes`
0% {
    
}

100% {
    transform:translateY(-4px);
    box-shadow:0px 5px 5px 2px rgb(0,0,0,0.5);
}
`