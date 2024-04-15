import styled from "styled-components";
import { ColorTheme } from "../styles/Theme";

export const Container = styled.div`
max-width:945px;
width:100%;
margin:0 auto;

@media ${ColorTheme.media.tablet} {
    padding:15px;
}
`