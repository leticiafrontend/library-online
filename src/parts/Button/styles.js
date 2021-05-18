import styled, { css } from 'styled-components';

export const ButtonStyled = styled.button`
  background-color: #4c40f7;
  box-shadow: 0px 3px 10px 0px #00000024;
  color: #fff;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  border: none;
  padding: 10px 30px;
  border-radius: 10px;
  transition: background 0.3s ease-in-out;
  &:hover {
    background-color: #00113b;
  }
  &:disabled {
    background-color: #9f9fa9;
    cursor: initial;
  }
  ${({ search }) =>
    search &&
    css`
      border-radius: 0 10px 10px 0;
    `}

  ${({ more }) =>
    more &&
    css`
      margin: 20px 15px 20px 15px;
    `}
`;
