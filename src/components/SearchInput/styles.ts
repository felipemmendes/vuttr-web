import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  letter-spacing: 0.02rem;
  line-height: 1.3rem;

  p {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    align-items: center;
    height: 2.5rem;
    background: ${({ theme: { colors } }) => colors.inputBg};
    border: 1px solid ${({ theme: { colors } }) => colors.inputBorder};
    border-radius: 5px;
    padding: 0.7rem;
    font-size: 1rem;

    &:focus-within {
      background: ${({ theme: { colors } }) => colors.inputBgFocus};
      border: 1px solid ${({ theme: { colors } }) => colors.inputBorderFocus};
      letter-spacing: 0px;
    }

    svg {
      height: 0.9rem;
      width: 0.9rem;
      stroke: ${({ theme: { colors } }) => colors.inputIcon};
      stroke-width: 3px;
      margin-right: 1rem;
    }

    input {
      flex: 1;
      height: auto;
      background: transparent;
      border: 0;
      width: 8rem;
      line-height: 1.3rem;

      &::placeholder {
        color: ${({ theme: { colors } }) => colors.inputPlaceholder};
        font-size: 1rem;
      }
    }
  }
`;
