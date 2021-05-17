import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/Card';
import { Button } from '../../parts/Button';
import { Container, DivHeader, Title, Results } from './styles';

export const Favorites = () => {
  return (
    <Container>
      <DivHeader>
        <Link to="/">
          <Button text="📚 Biblioteca" />
        </Link>
      </DivHeader>
      <div>
        <Title>Livros favoritos ❤️</Title>
      </div>
      <Results>
        <Card
          key={1}
          title="titulo"
          image={null}
          description={null}
          date={null}
        />
      </Results>
    </Container>
  );
};
