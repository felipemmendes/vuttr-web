import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  button.close {
    align-self: flex-end;
    border: 0;
    background: none;
    z-index: 1;

    svg {
      stroke: ${({ theme: { colors } }) => colors.textTertiary};
      stroke-width: 10px;
      width: 0.6rem;
      height: 0.6rem;
    }
  }

  header {
    display: flex;
    align-items: center;
    margin-top: -0.7rem;

    p {
      font-size: 1.3rem;
      line-height: 1.6rem;
      font-weight: 600;
      letter-spacing: 0.026rem;
    }
  }

  p.content {
    letter-spacing: 0.02rem;
    color: ${({ theme: { colors } }) => colors.textTertiary};
    margin: 1.5rem 0;
  }

  div {
    display: flex;
    justify-content: flex-end;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 5px;
      height: 2.5rem;
      font-size: 0.9rem;
      font-weight: 600;
      letter-spacing: 0.0018rem;
      padding: 0.7rem 1.3rem;
      align-self: flex-end;
      margin-top: 1.1rem;
      transition: background-color 0.2s;

      &.cancel {
        background: ${({ theme: { colors } }) => colors.btnSecondary};
        color: ${({ theme: { colors } }) => colors.btnSecondaryText};

        &:hover {
          background: ${({ theme: { colors } }) => colors.btnSecondaryHover};
        }

        &:active {
          background: ${({ theme: { colors } }) => colors.btnSecondaryActive};
        }
      }

      &.remove {
        background: ${({ theme: { colors } }) => colors.btnPrimaryDanger};
        color: ${({ theme: { colors } }) => colors.btnPrimaryDangerText};

        &:hover {
          background: ${({ theme: { colors } }) =>
            colors.btnPrimaryDangerHover};
        }

        &:active {
          background: ${({ theme: { colors } }) =>
            colors.btnPrimaryDangerActive};
        }
      }

      & + button {
        margin-left: 1.5rem;
      }
    }
  }
`;
