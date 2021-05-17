import React from 'react';
import {
  Container,
  SearchDiv,
  DivInputSearch,
  InputSearch,
  Button,
  ImageSearch,
  Title,
  Text,
  DivText,
  DivHeader,
  Results,
} from './styles';
import booksAndWoman from '../../images/book_and_woman.svg';
import { Card } from '../../components/Card';

export const Home = () => {
  return (
    <Container>
      <DivHeader>
        <Button>❤️ Favoritos</Button>
      </DivHeader>
      <SearchDiv>
        <DivText>
          <Title>Biblioteca Online</Title>
          <Text>Pesquise pelo nome do livro</Text>
          <DivInputSearch>
            <InputSearch type="text" />
            <Button type="submit" search>
              Buscar livro
            </Button>
          </DivInputSearch>
        </DivText>
        <ImageSearch src={booksAndWoman} />
      </SearchDiv>
      <Text results>23 Resultados para a sua busca</Text>
      <Results>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Results>
    </Container>
  );
};
