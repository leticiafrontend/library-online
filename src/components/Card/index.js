import React, { useState } from 'react';
import { Button } from '../../parts/Button/index';
import { Container, Image, Title } from './styles';
import imageBlack from '../../images/black.jpeg';
import { Modal } from '../Modal';

export const Card = (props) => {
  const { title, image, description, date, index } = props;

  const [isOpen, setIsOpen] = useState(false);

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
      />
    </Container>
  );
};
