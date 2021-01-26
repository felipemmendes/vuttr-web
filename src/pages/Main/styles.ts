import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 80px 0;
  width: 80%;

  @media (min-width: 769px) {
    width: 80%;
    max-width: 768px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  button.sign-out {
    margin-left: auto;
    border: 1px solid ${({ theme: { colors } }) => colors.btnPrimaryDanger};
    border-radius: 4px;
    padding: 0.2rem 0.3rem;
    background: none;
    color: ${({ theme: { colors } }) => {
      return colors.btnPrimaryDanger;
    }};
    transition: background-color 0.2s;

    &:hover {
      background: ${({ theme: { colors } }) => colors.btnPrimaryDanger};
      color: ${({ theme: { colors } }) => colors.btnPrimaryDangerText};
    }
  }

  ul,
  li {
    list-style: none;
  }
`;

export const Header = styled.header`
  margin-bottom: 3rem;

  h1 {
    font-size: 2.1rem;
    font-weight: 600;
    margin-bottom: 0.6rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export const Bar = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  margin-bottom: 2rem;

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
    margin-bottom: 1rem;

    &:hover {
      background: ${({ theme: { colors } }) => colors.btnPrimaryHover};
    }

    &:active {
      background: ${({ theme: { colors } }) => colors.btnPrimaryActive};
    }

    svg.icon-add {
      transform: rotate(45deg);
      height: 0.45rem;
      width: 0.45rem;
      stroke: ${({ theme: { colors } }) => colors.textSecondary};
      stroke-width: 10px;
      margin-right: 0.5rem;
    }
  }

  @media (min-width: 376px) {
    flex-direction: row;

    button {
      margin-bottom: 0;
    }
  }
`;

export const SearchArea = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 601px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Checkbox = styled.label`
  display: flex;
  align-items: center;
  height: 2.5rem;
  letter-spacing: 0.02rem;
  line-height: 1.3rem;
  font-size: 0.8rem;

  input {
    height: 0.75rem;
    width: 0.75rem;
    background: transparent;
    border: 0;
    margin-right: 0.3rem;
    margin-left: 0.1rem;
  }

  @media (min-width: 601px) {
    input {
      margin-left: 1rem;
    }
  }

  @media (min-width: 769px) {
    font-size: 0.9rem;
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;

  div {
    width: 70px;
    height: 70px;
    border: 4px solid ${({ theme: { colors } }) => colors.spinnerPrimary};
    border-top: 4px solid ${({ theme: { colors } }) => colors.bg};
    border-radius: 50%;
    animation: ${spin} 2s linear infinite;
  }
`;
