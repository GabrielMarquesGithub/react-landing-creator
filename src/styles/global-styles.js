import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  font-size: 62.5%;
}

body{
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.font.family.default};
  background: grey;
}
h1,h2,h3,h4,h5,h6{
  font-family: ${({ theme }) => theme.font.family.secondary};}

button{
cursor: pointer;
}
a{
  color: ${({ theme }) => theme.colors.secondary};
}
p{
  margin: ${({ theme }) => theme.spacing.medium} 0;
}
ul, ol{
  margin: ${({ theme }) => theme.spacing.medium} 0;
  padding: ${({ theme }) => theme.spacing.medium} 0;
}


`;
