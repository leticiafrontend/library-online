import React, { useCallback, useState } from 'react';
import { Button } from '../../parts/Button/index';
import { Container, Image, Title } from './styles';
import imageBlack from '../../images/black.jpeg';
import { Modal } from '../Modal';

export const Card = (props) => {
  const { title, image, description, date, index, id, isFavorite } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [storage, setStorage] = useState(
    JSON.parse(localStorage.getItem('favorites')) || [],
  );

  const saveStorage = useCallback((storage) => {
    const favoritesStorage = JSON.stringify(storage);
    localStorage.setItem('favorites', favoritesStorage);
  }, []);

  const addFavorite = () => {
    const dataBook = {
      description: description,
      title: title,
      image: image,
      date: date,
      id: id,
    };
    const bookStorage = JSON.parse(localStorage.getItem('favorites'));
    bookStorage.push(dataBook);
    setStorage(bookStorage);
    saveStorage(bookStorage);
    setDisabled(true);
  };

  const removeFavorite = () => {
    const bookStorage = JSON.parse(localStorage.getItem('favorites'));
    bookStorage.splice(index, 1);
    setStorage(bookStorage);
    saveStorage(bookStorage);
    window.location.reload();
  };

  return (
    <Container>
      <Image src={image === null ? imageBlack : image} />
      <Title>{title}</Title>
      <Button more text="Ver mais" onClick={() => setIsOpen(true)} />
      <Modal
        description={description}
        title={title}
        image={image}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        date={date}
        index={index}
        favorite={addFavorite}
        remove={removeFavorite}
        disabled={disabled}
        isFavorite={isFavorite}
        id={id}
      />
    </Container>
  );
};
