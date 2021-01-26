import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import ReactModal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  size: 'small' | 'medium' | 'large' | 'huge';
}

const modalSizes = {
  small: '400px',
  medium: '600px',
  large: '800px',
  huge: '960px',
};

const Modal: React.FC<ModalProps> = ({ isOpen, setIsOpen, size, children }) => {
  const themeContext = useContext(ThemeContext);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={setIsOpen}
      style={{
        content: {
          position: 'initial',
          display: 'flex',
          flexDirection: 'column',
          width: '80%',
          maxWidth: modalSizes[size],
          height: 'auto',
          maxHeight: '90%',
          margin: 0,
          padding: '1rem 1.5rem',
          background: themeContext.colors.bg,
          color: themeContext.colors.textPrimary,
          border: 'none',
          borderRadius: '5px',
        },
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          margin: 0,
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          height: '100vh',
          backgroundColor: themeContext.colors.bgOutOfFocus,
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
