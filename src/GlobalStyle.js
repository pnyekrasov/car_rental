import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  color: rgba(18, 20, 23, 0.5);
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
}

h1,
h2,
h3,
h4,
p {
  margin: 0;
}

ul { 
    margin: 0;
    padding: 0;
    list-style: none;
}

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }

`;
