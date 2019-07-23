import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    
}

html, body, #root {
    height:100%;
}

body{
background: #2c3e50;  /* fallback for old browsers */

}

#root{
    
    margin: 0 auto;
 }

 button{
     cursor: pointer;
 }

`;
