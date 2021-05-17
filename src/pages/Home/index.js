import React, { useState } from 'react';
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
import { Spinner } from '../../parts/Spinner';

export const Home = () => {
  const [valueInput, setValueInput] = useState('');
  const [resultsApi, setResultsApi] = useState('');
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(false);
  const urlApi = 'https://www.googleapis.com/books/v1/volumes?q=';

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const result = valueInput.replaceAll(' ', '+');
    const resultSearch = urlApi + result;

    (async () => {
      const response = await fetch(resultSearch);
      const results = await response.json();
      if (results.items.length <= 0) {
        // NADA ENCONTRADO
        setErro(true);
      } else {
        setErro(false);
      }
      setResultsApi(results);
      setLoading(false);
    })();
  };
  console.log(resultsApi);
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
            <InputSearch
              type="text"
              value={valueInput}
              onChange={(e) => setValueInput(e.target.value)}
            />
            <Button
              type="submit"
              search
              onClick={handleSubmit}
              text="Buscar livro"
            />
          </DivInputSearch>
        </DivText>
        <ImageSearch src={booksAndWoman} />
      </SearchDiv>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {resultsApi.items && (
            <>
              <Text results>
                {resultsApi.items.length} Resultados para sua busca!
              </Text>
              <Results>
                {resultsApi.items.map((item, index) => (
                  <Card
                    title={item.volumeInfo.title}
                    image={
                      item.volumeInfo.imageLinks
                        ? item.volumeInfo.imageLinks.thumbnail
                        : null
                    }
                  />
                ))}
              </Results>
            </>
          )}
        </>
      )}
    </Container>
  );
};
