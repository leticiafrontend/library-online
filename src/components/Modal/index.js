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
  const {
    description,
    image,
    title,
    date,
    isOpen,
    setIsOpen,
    favorite,
    disabled,
    isFavorite,
    remove,
  } = props;

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
              {description === null ? 'Sem descrição' : description}
            </Description>
          </Scroll>
          <Button
            onClick={() => (isFavorite ? remove() : favorite())}
            text={
              isFavorite
                ? 'Remover dos favoritos 💔'
                : 'Adicionar aos favoritos ❤️'
            }
            disabled={disabled}
          />
        </Content>
      </Container>
    )
  );
};
