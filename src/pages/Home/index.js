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
  Pagination,
} from './styles';
import booksAndWoman from '../../images/book_and_woman.svg';
import { Card } from '../../components/Card';
import { Button } from '../../parts/Button/index';
import { Spinner } from '../../parts/Spinner';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [valueInput, setValueInput] = useState('');
  const [resultsApi, setResultsApi] = useState('');
  const [pagination, setPagination] = useState(0);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(false);
  const [pendingInput, setPendingInput] = useState(false);
  const apiKey = 'AIzaSyBNN_gMa_baQXo0kewGhvX_lgmL9GfmFgU';

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (valueInput.length > 0) {
      setLoading(true);

      const result = valueInput.replaceAll(' ', '+');
      const resultSearch = `https://www.googleapis.com/books/v1/volumes?q=${result}&maxResults=16&startIndex=${pagination}&key=${apiKey}`;

      (async () => {
        const response = await fetch(resultSearch);
        const results = await response.json();

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

  const nextPage = () => {
    console.log('Próxima Página');
  };

  const previousPage = () => {
    console.log('Página Anterior');
  };

  return (
    <Container>
      <DivHeader>
        <Link to="/favoritos">
          <Button text="❤️ Favoritos" />
        </Link>
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
                    id={item.id}
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
              {resultsApi.totalItems > 16 && (
                <Pagination>
                  <Button
                    text="<"
                    disabled={pagination >= 0 ? true : false}
                    onClick={previousPage}
                  />
                  <Button text=">" onClick={nextPage} />
                </Pagination>
              )}
            </>
          )}
        </>
      )}
      {erro && <Text warning>Nenhum livro foi encontrado</Text>}
    </Container>
  );
};
