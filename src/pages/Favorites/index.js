import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/Card';
import { Button } from '../../parts/Button';
import { Container, DivHeader, Title, Results, Pagination } from './styles';

export const Favorites = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('favorites')) || [];
    setBooks(local);
  }, []);

  return (
    <Container>
      <DivHeader>
        <Link to="/">
          <Button text="📚 Biblioteca" />
        </Link>
      </DivHeader>
      <div>
        <Title>Livros Favoritos ❤️</Title>
      </div>
      {books && (
        <Results>
          {books.map((item, index) => (
            <Card
              key={index}
              index={index}
              id={item.id}
              title={item.title}
              image={item.image}
              description={item.description}
              date={item.date}
              isFavorite={true}
            />
          ))}
        </Results>
      )}
      {books.length > 16 && (
        <Pagination>
          <Button text="<" />
          <Button text=">" />
        </Pagination>
      )}
    </Container>
  );
};
