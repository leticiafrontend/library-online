import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 3px 10px 0px #00000024;
  border-radius: 10px;
  width: 280px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  padding: 10px 10px 0 10px;
`;
