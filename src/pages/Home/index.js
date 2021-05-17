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
import { Button } from '../../parts/Button/index';
import { Spinner } from '../../parts/Spinner';

export const Home = () => {
  const [valueInput, setValueInput] = useState('');
  const [resultsApi, setResultsApi] = useState('');
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(false);
  const [pendingInput, setPendingInput] = useState(false);
  const urlApi = 'https://www.googleapis.com/books/v1/volumes?q=';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valueInput.length > 0) {
      setLoading(true);

      const result = valueInput.replaceAll(' ', '+');
      const resultSearch = urlApi + result;

      (async () => {
        const response = await fetch(resultSearch);
        const results = await response.json();
        console.log(results);
        if (results.totalItems === 0) {
          setErro(true);
        } else {
          setErro(false);
        }
        setPendingInput(false);
        setResultsApi(results);
        setLoading(false);
      })();
    } else {
      setPendingInput(true);
    }
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
              pendingInput={pendingInput}
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
                {resultsApi.totalItems} Resultados para sua busca!
              </Text>
              <Results>
                {resultsApi.items.map((item, index) => (
                  <Card
                    key={index}
                    title={item.volumeInfo.title}
                    image={
                      item.volumeInfo.imageLinks
                        ? item.volumeInfo.imageLinks.thumbnail
                        : null
                    }
                    description={
                      item.volumeInfo.description
                        ? item.volumeInfo.description
                        : null
                    }
                    date={
                      item.volumeInfo.publishedDate
                        ? item.volumeInfo.publishedDate
                        : null
                    }
                  />
                ))}
              </Results>
            </>
          )}
        </>
      )}
      {erro && <Text warning>Nenhum livro foi encontrado</Text>}
    </Container>
  );
};
