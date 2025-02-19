import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

  :root {
    /* Base Colors */
    --white:rgb(240, 240, 240);
    --black:rgb(23, 23, 23);
    
    /* Brillant colors */
    --neon-green: #05e316;
    --neon-blue:rgb(30, 109, 255);
    --neon-red: #ff3838;
    --neon-yellow: #f7d51d;
    --neon-violet: #9b5de5;
    --neon-orange: #ff9f1a;
    
    /* Dark colors */
    --neon-dark-green: #218c5e;
    --neon-dark-blue: #0e7fae;
    --neon-dark-red: #b22222;
    --neon-dark-yellow: #b89b16;
    --neon-dark-violet: #6a2c90;
    --neon-dark-orange: #b4640a;
    --dark-gray:rgb(12, 12, 12);

    /* Background */
    --background-color: var(--dark-gray);
    --text-color: var(--white);
  }
  * {
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    margin: 0;
    padding: 0;
    color: var(--text-color);
  }
  body {
    background-color: var(--background-color);
  }
`;
 
export default GlobalStyle;