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
  const [error, setError] = useState(false);
  const [pendingInput, setPendingInput] = useState(false);
  const apiKey = 'AIzaSyBNN_gMa_baQXo0kewGhvX_lgmL9GfmFgU';

  const searchAPi = (page) => {
    const result = valueInput.replaceAll(' ', '+');
    const resultSearch = `https://www.googleapis.com/books/v1/volumes?q=${result}&maxResults=16&startIndex=${page}&key=${apiKey}`;

    (async () => {
      const response = await fetch(resultSearch);
      const results = await response.json();

      results.totalItems === 0 ? setError(true) : setError(false);

      setPendingInput(false);
      setResultsApi(results);
      setLoading(false);
    })();
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (valueInput.length > 0) {
      setLoading(true);
      searchAPi(0);
    } else {
      setPendingInput(true);
    }
  };

  const nextPage = () => {
    searchAPi(pagination + 16);
    setPagination(pagination + 16);
  };

  const previousPage = () => {
    searchAPi(pagination - 16);
    setPagination(pagination - 16);
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
                    disabled={pagination <= 0 ? true : false}
                    onClick={previousPage}
                  />
                  <Button
                    text=">"
                    onClick={nextPage}
                    disabled={resultsApi.totalItems - pagination <= 16}
                  />
                </Pagination>
              )}
            </>
          )}
        </>
      )}
      {error && <Text warning>Nenhum livro foi encontrado</Text>}
    </Container>
  );
};
