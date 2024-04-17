import styled from "styled-components";
import { ColorTheme } from "../../../../styles/Theme";

const StyledDesktopMenu = styled.nav`
    padding:40px 0;
    border-bottom:1px solid ${ColorTheme.fontcolors.secondfont};

    @media ${ColorTheme.media.tablet} {
        padding:0;
    }
`

export const S = {
    
}