import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme: { colors } }) => colors.bg};
  width: 100%;
  border: 1px solid ${({ theme: { colors } }) => colors.cardBorder};
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;

  p {
    line-height: 1.3rem;
    letter-spacing: 0.02rem;
    margin: 1rem 0;
  }
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: ${({ theme: { colors } }) => colors.linkPrimary};

    &:hover {
      color: ${({ theme: { colors } }) => colors.linkPrimaryHover};
    }

    h5 {
      font-size: 1.2rem;
      letter-spacing: 0.024rem;
      line-height: 1.5rem;
    }
  }

  button {
    display: flex;
    align-items: baseline;
    border: 0;
    background: none;
    line-height: 1rem;
    transition: color 0.3s;
    color: ${({ theme: { colors } }) => colors.btnPrimaryDanger};

    svg.icon-remove {
      stroke: ${({ theme: { colors } }) => colors.btnPrimaryDanger};
      stroke-width: 5px;
      height: 0.5rem;
      width: 0.5rem;
      margin-right: 0.3rem;
    }

    &:hover {
      color: ${({ theme: { colors } }) => colors.btnPrimaryDangerHover};

      svg {
        stroke: ${({ theme: { colors } }) => colors.btnPrimaryDangerHover};
      }
    }
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  span {
    font-size: 0.9rem;
    line-height: 1.2rem;
    letter-spacing: 0.018rem;
    margin-right: 0.5rem;
  }
`;
