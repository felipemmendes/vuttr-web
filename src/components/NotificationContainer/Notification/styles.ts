import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type: 'success' | 'error';
}

const toastTypesVariations = {
  success: css`
    background: ${({ theme: { colors } }) => colors.notificationSuccessBg};
    color: ${({ theme: { colors } }) => colors.notificationSuccessText};

    div {
      button {
        background: ${({ theme: { colors } }) => colors.notificationSuccessBtn};
      }
    }
  `,
  error: css`
    background: ${({ theme: { colors } }) => colors.notificationErrorBg};
    color: ${({ theme: { colors } }) => colors.notificationErrorText};

    div {
      button {
        background: ${({ theme: { colors } }) => colors.notificationErrorBtn};
      }
    }
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  padding: 16px 30px 16px 16px;
  border-radius: 5px;
  display: flex;
  z-index: 3;

  ${(props) => toastTypesVariations[props.type]}

  & + div {
    margin-top: 8px;
  }

  svg {
    margin-right: 1rem;

    &.icon-check-circle,
    &.icon-danger {
      fill: ${({ theme: { colors } }) => colors.notificationConfirmBtn};
    }
  }

  div {
    strong {
      font-weight: 600;
      letter-spacing: 0.02rem;
    }

    p {
      margin: 1rem 0 1rem;
      font-size: 0.9rem;
      letter-spacing: 0.018rem;
      line-height: 1.2rem;
    }

    button {
      background: ${({ theme: { colors } }) => colors.notificationConfirmBtn};
      border: none;
      border-radius: 5px;
      padding: 0.3rem 0.8rem;
      font-size: 0.9rem;
      letter-spacing: 0.018rem;
    }
  }

  button.close {
    position: absolute;
    right: 5px;
    top: 15px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;

    svg.icon-close {
      stroke: ${({ theme: { colors } }) => colors.notificationConfirmBtn};
      stroke-width: 5px;
      height: 1rem;
      width: 1rem;
    }
  }
`;
