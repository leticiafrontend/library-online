import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  @media (max-width: 1200px) {
    max-width: 800px;
  }
  @media (max-width: 830px) {
    margin: 20px 50px;
  }
  @media (max-width: 530px) {
    margin: 20px;
  }
`;

export const DivHeader = styled.div`
  text-align: right;
`;

export const DivText = styled.div``;

export const SearchDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DivInputSearch = styled.form`
  display: flex;
  align-items: center;
  @media (max-width: 530px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
  line-height: 72px;
  color: #00113b;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  color: #9f9fa9;
  padding-bottom: 10px;
  ${({ results }) =>
    results &&
    css`
      color: #4c40f7;
      font-weight: 500;
    `}

  ${({ warning }) =>
    warning &&
    css`
      color: #ff0000;
      font-weight: 500;
    `}
`;

export const InputSearch = styled.input`
  border: none;
  box-shadow: 0px 3px 10px 0px #00000024;
  color: #00113b;
  border-radius: 10px 0 0 10px;
  padding: 12px 25px 12px 15px;
  width: 370px;
  ${({ pendingInput }) =>
    pendingInput &&
    css`
      border: 1px solid #ff0000;
    `}

  @media (max-width: 1200px) {
    width: 270px;
  }

  @media (max-width: 530px) {
    width: 100%;
    border-radius: 10px;
  }
`;

export const ImageSearch = styled.img`
  width: 100%;
  max-width: 480px;
  margin: 80px 0;
  @media (max-width: 1200px) {
    max-width: 250px;
  }
  @media (max-width: 830px) {
    display: none;
  }
`;

export const Results = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 30px;
  column-gap: 10px;
  margin: 30px 0;
  @media (max-width: 530px) {
    justify-content: center;
    gap: 10px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 20px;
`;
