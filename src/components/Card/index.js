import React from 'react';
import { Button } from '../../pages/Home/styles';
import { Container, Image, Title } from './styles';
import imageBlack from '../../images/black.jpeg';

export const Card = () => {
  return (
    <Container>
      <Image src={imageBlack} />
      <Title>React Native</Title>
      <Button more>Ver mais</Button>
    </Container>
  );
};
