import React from 'react';
import {
  Container,
  SearchDiv,
  DivInputSearch,
  InputSearch,
  ImageSearch,
  Title,
  Text,
  DivText,
  DivHeader,
  Results,
} from './styles';
import booksAndWoman from '../../images/book_and_woman.svg';
import { Card } from '../../components/Card';
import { Modal } from '../../components/Modal';
import { Button } from '../../parts/Button/index';

export const Home = () => {
  return (
    <Container>
      <DivHeader>
        <Button text="❤️ Favoritos" />
      </DivHeader>
      <SearchDiv>
        <DivText>
          <Title>Biblioteca Online</Title>
          <Text>Pesquise pelo nome do livro</Text>
          <DivInputSearch>
            <InputSearch type="text" />
            <Button type="submit" search text="Buscar livro" />
          </DivInputSearch>
        </DivText>
        <ImageSearch src={booksAndWoman} />
      </SearchDiv>
      <Text results>23 Resultados para a sua busca</Text>
      <Results>
        <Card />
      </Results>
      <Modal />
    </Container>
  );
};
