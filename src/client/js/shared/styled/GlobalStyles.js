import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  body {  
    font-family: BPGMrgvlovaniCaps, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    -webkit-font-smoothing: antialiased;
    background-color: ${props => props.theme.secondaryColor};
    margin: 0 auto;
    user-select: none;
    cursor: default;
    line-height: 1.2;
  }
  html,body {
    height: 100%;
  }

  a {
    text-decoration: none;
  }

`