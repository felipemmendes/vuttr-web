import styled, { css } from 'styled-components';

interface InputContainerProps {
  isBig?: boolean;
  hasError: boolean;
  name: string;
}

export const Container = styled.label<InputContainerProps>`
  display: flex;
  flex-direction: column;
  letter-spacing: 0.02rem;
  line-height: 1.3rem;

  div.labelText {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    p {
      font-size: 1rem;
      font-weight: 600;
    }

    span {
      font-size: 0.6rem;
      color: ${({ theme: { colors } }) => colors.inputRequired};
      white-space: pre;

      ${(props) =>
        props.hasError &&
        css`
          color: ${({ theme: { colors } }) => colors.inputErrorText};
        `}
    }
  }

  div.input {
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

    ${(props) =>
      props.isBig &&
      css`
        height: 9rem;
      `}

    ${(props) =>
      props.hasError &&
      css`
        background: ${({ theme: { colors } }) => colors.inputErrorBg};
        border: 1px solid ${({ theme: { colors } }) => colors.inputErrorBorder};
        input {
          color: ${({ theme: { colors } }) => colors.inputErrorText};

          &:focus {
            color: ${({ theme: { colors } }) => colors.textPrimary};
          }
        }
      `}

    svg {
      height: 0.9rem;
      width: 0.9rem;
      stroke: ${({ theme: { colors } }) => colors.inputPlaceholder};
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
      }
    }

    textarea {
      resize: none;
      border: 0;
      background: none;
      width: 100%;
      &::placeholder {
        color: ${({ theme: { colors } }) => colors.inputPlaceholder};
      }
    }
  }

  span.error {
    align-self: flex-end;
    font-size: 0.8rem;
    letter-spacing: 0.018rem;
    color: ${({ theme: { colors } }) => colors.inputErrorText};
  }

  & + label {
    margin-top: 1.1rem;
  }
`;
