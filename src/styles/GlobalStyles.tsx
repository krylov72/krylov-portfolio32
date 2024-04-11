import { createGlobalStyle } from "styled-components";
import { ColorTheme } from "../theme/Theme";


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

li{
    list-style:none;
}
a{
    text-decoration:none;
}

main{
    padding-bottom:105px;
}
section{
padding-bottom:105px;
}
section:nth-child(odd){
    background-color: ${ColorTheme.colors.secondbg};
}

`