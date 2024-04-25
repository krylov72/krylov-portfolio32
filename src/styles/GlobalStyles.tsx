import { createGlobalStyle } from "styled-components";
import { ColorTheme } from "./Theme";


export const GlobalStyles = createGlobalStyle`
    *,
   *::before,
   *::after{
        margin: 0;
        padding: 0;
        box-sizing:border-box; 
   }
   
   body {
  margin: 0;
  font-family: 'Anonymous Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


}

h4{
    color: ${ColorTheme.fontcolors.secondfont};
    font-size: 14px;
    font-weight: 400;
    text-align: center;
}

li{
    list-style:none;
}
a{
    text-decoration:none;
    cursor: pointer;
    &:active, &:focus {
	outline: none;
}
&::-moz-focus-inner {
	border: 0;
}
}



section {
    padding:100px 0 129px;
    @media ${ColorTheme.media.tablet}{
        padding:60px 0 65px;
    }
}


footer {
    padding:90px 0 50px;

    @media ${ColorTheme.media.mobile} {
        padding: 40px 0 20px;
    }
}
section:nth-child(odd){
    background-color: ${ColorTheme.colors.secondbg};
}

button{
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;

    &:focus {
    outline-style: none;
    outline-width: 0px !important;
    outline-color: none !important;
}
}

`