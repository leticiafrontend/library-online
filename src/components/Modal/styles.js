import styled, { css, keyframes } from 'styled-components';

const show = keyframes`
    from {opacity: 0;}
    to {opacity: 1}
`;

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ isOpen }) =>
    isOpen &&
    css`
      animation: ${show} 0.3s ease-out;
    `}
`;

export const Content = styled.div`
  background-color: #fff;
  padding: 24px;
  width: 400px;
  height: 400px;
  border-radius: 0 10px 10px 0;
`;

export const Close = styled.span`
  color: #d1ced7;
  float: right;
  font-size: 28px;

  :hover,
  :focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const Image = styled.img`
  width: 230px;
  height: 400px;
  border-radius: 10px 0 0 10px;
  object-fit: cover;
`;

export const Title = styled.h1`
  color: #4c40f7;
  font-size: 18px;
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #00113b;
`;

export const Scroll = styled.div`
  height: 225px;
  overflow: auto;
  margin: 15px 0 20px;
  ${({ title }) =>
    title &&
    css`
      height: fit-content;
      max-height: 50px;
      margin: 0;
    `}
`;
