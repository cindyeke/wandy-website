import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  
  html {
    --color-header: #222324;
    --color-white: #FCF5E5;
    /* --color-gray: #999999;
    --color-lightgray: #dcdcdc;
    --color-darkgray: #909090;
    --color-red: #F4364C; */
  }
`;

export default GlobalStyle;
