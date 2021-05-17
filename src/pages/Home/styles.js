import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 50px auto;
`;

export const Button = styled.button`
  background-color: #4c40f7;
  box-shadow: 0px 3px 10px 0px #00000024;
  color: #fff;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  border: none;
  padding: 10px 30px;
  border-radius: 10px;
  transition: background 0.3s ease-in-out;
  &:hover {
    background-color: #00113b;
  }
  ${(props) =>
    props.search &&
    css`
      margin-left: -10px;
      border-radius: 0 10px 10px 0;
    `}

  ${(props) =>
    props.more &&
    css`
      margin: 20px 10px 20px 20px;
    `}
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

export const DivInputSearch = styled.div`
  display: flex;
  align-items: center;
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
  ${(props) =>
    props.results &&
    css`
      color: #4c40f7;
      font-weight: 500;
    `}
`;

export const InputSearch = styled.input`
  border: none;
  box-shadow: 0px 3px 10px 0px #00000024;
  color: #00113b;
  border-radius: 10px;
  padding: 12px 25px 12px 15px;
  width: 370px;
`;

export const ImageSearch = styled.img`
  width: 100%;
  max-width: 480px;
  margin: 80px 0;
`;

export const Results = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 30px;
  margin: 30px 0;
`;
