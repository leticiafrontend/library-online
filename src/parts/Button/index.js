import React from 'react';
import { ButtonStyled } from './styles';

export const Button = (props) => {
  return <ButtonStyled {...props}>{props.text}</ButtonStyled>;
};
