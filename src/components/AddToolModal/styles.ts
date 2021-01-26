import styled from 'styled-components';

export const ModalHeader = styled.div`
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
    align-items: baseline;
    justify-content: center;
    margin-top: -0.7rem;

    p {
      font-size: 1.3rem;
      line-height: 1.6rem;
      font-weight: 600;
      letter-spacing: 0.026rem;
      margin: 0 auto;
    }
  }
`;

export const Content = styled.div`
  margin: 1rem 0;
  overflow-y: scroll;

  form {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 1rem;
  }
`;

export const ConfirmButton = styled.button`
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
  align-self: center;
  margin-top: 1.1rem;
  width: 80%;
  transition: background-color 0.2s;

  &:hover {
    background: ${({ theme: { colors } }) => colors.btnPrimaryHover};
  }

  &:active {
    background: ${({ theme: { colors } }) => colors.btnPrimaryActive};
  }
`;
