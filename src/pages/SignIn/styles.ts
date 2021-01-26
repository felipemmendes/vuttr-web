import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 3rem;
  background: ${({ theme: { colors } }) => colors.bg};
  width: 80%;
  max-width: 500px;
  border: 1px solid ${({ theme: { colors } }) => colors.cardBorder};
  border-radius: 5px;

  form {
    width: 100%;
    text-align: center;
  }

  h1 {
    margin-bottom: 2rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5px;
    background: ${({ theme: { colors } }) => colors.btnPrimary};
    height: 2.5rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: ${({ theme: { colors } }) => colors.btnPrimaryText};
    letter-spacing: 0.0018rem;
    padding: 0.7rem 1.3rem;
    margin: 1.1rem 0 0.5rem;
    width: 100%;
    transition: background-color 0.2s;

    &:hover {
      background: ${({ theme: { colors } }) => colors.btnPrimaryHover};
    }

    &:active {
      background: ${({ theme: { colors } }) => colors.btnPrimaryActive};
    }
  }

  a {
    text-decoration: none;
    color: ${({ theme: { colors } }) => colors.linkPrimary};

    &:hover {
      color: ${({ theme: { colors } }) => colors.linkPrimaryHover};
    }
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border: 4px solid ${({ theme: { colors } }) => colors.bg};
  border-top: 4px solid ${({ theme: { colors } }) => colors.spinnerPrimary};
  border-radius: 50%;
  animation: ${spin} 2s linear infinite;
`;
