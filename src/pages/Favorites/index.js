import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/Card';
import { Button } from '../../parts/Button';
import { Container, DivHeader, Title, Results, Text } from './styles';

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
      {books.length > 0 ? (
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
      ) : (
        <Text>Nenhum livro foi marcado como favorito ainda!</Text>
      )}
    </Container>
  );
};
