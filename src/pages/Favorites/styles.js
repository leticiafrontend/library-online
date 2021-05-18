import styled from 'styled-components';

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

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
  line-height: 72px;
  color: #00113b;
`;

export const Results = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 30px;
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
