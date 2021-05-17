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
import imageBlack from '../../images/black.jpeg';
import { Button } from '../../parts/Button/index';

export const Modal = (props) => {
  const { description, image, title, date, isOpen, setIsOpen } = props;

  return (
    isOpen && (
      <Container>
        <Image src={image === null ? imageBlack : image} />
        <Content>
          <Close onClick={() => setIsOpen(false)}>&times;</Close>
          <Scroll title>
            <Title>{title}</Title>
          </Scroll>
          <Scroll>
            <Description>
              Data de publicação: {date === null ? 'Não informado' : date}
              <br />
              {description}
            </Description>
          </Scroll>
          <Button text="❤️ Adicionar aos favoritos" />
        </Content>
      </Container>
    )
  );
};
