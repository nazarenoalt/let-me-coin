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
    --neon-violet:rgb(136, 38, 255);
    --neon-orange: #ff9f1a;

    /* Transparent Colors */
    --transparent-neon-green: rgba(5, 227, 22, 0.5);
    --transparent-neon-blue: rgba(30, 109, 255, 0.5);
    --transparent-neon-red: rgba(255, 56, 56, 0.5);
    --transparent-neon-yellow: rgba(247, 213, 29, 0.5);
    --transparent-neon-violet: rgba(155, 93, 229, 0.1);
    --transparent-neon-orange: rgba(255, 159, 26, 0.5);
    
    /* Very light colors */
    --very-light-violet:rgb(236, 222, 255);

    /* Dark colors */
    --dark-neon-green: #218c5e;
    --dark-neon-blue: #0e7fae;
    --dark-neon-red: #b22222;
    --dark-neon-yellow: #b89b16;
    --dark-neon-violet: #6a2c90;
    --dark-neon-orange: #b4640a;
    --dark-gray:rgb(12, 12, 12);

    /* Background */
    --background-color: var(--dark-gray);
    --text-color: var(--very-light-violet);
    --link-color:rgb(0, 202, 10);

  }
  * {
    box-sizing: border-box;
    font-family: Roboto, "Open Sans", Arial, Helvetica, sans-serif;;
    margin: 0;
    padding: 0;
    color: var(--text-color);
  }

  a {
    color: var(--link-color);
  }
  body {
    background-color: var(--background-color);
  }
`;
 
export default GlobalStyle;