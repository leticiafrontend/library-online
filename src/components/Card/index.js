import React from 'react';
import { Button } from '../../parts/Button/index';
import { Container, Image, Title } from './styles';
import imageBlack from '../../images/black.jpeg';

export const Card = (props) => {
  const { title, image } = props;
  console.log(image);
  return (
    <Container>
      <Image src={image === null ? imageBlack : image} />
      <Title>{title}</Title>
      <Button more text="Ver mais" />
    </Container>
  );
};
