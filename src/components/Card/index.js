import React from 'react';
import { Button } from '../../parts/Button/index';
import { Container, Image, Title } from './styles';
import imageBlack from '../../images/black.jpeg';

export const Card = () => {
  return (
    <Container>
      <Image src={imageBlack} />
      <Title>React Native</Title>
      <Button more text="Ver mais" />
    </Container>
  );
};
