import React from 'react';
import {
  Container,
  Content,
  Close,
  Image,
  Title,
  Description,
  Scroll,
} from './styles';
import black from '../../images/black.jpeg';
import { Button } from '../../parts/Button/index';

export const Modal = () => {
  return (
    <Container isOpen={true}>
      <Image src={black} />
      <Content>
        <Close>&times;</Close>
        <Title>React Native</Title>
        <Scroll>
          <Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Description>
        </Scroll>
        <Button text="❤️ Adicionar aos favoritos" />
      </Content>
    </Container>
  );
};
