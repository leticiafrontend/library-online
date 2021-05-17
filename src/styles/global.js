import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  body{
    background-color: #f1f1f1;
  }
  input{
    outline: 0;
  }
  button{
    cursor: pointer;
  }
`;
