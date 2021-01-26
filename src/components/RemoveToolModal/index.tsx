import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { deleteTool } from '../../store';
import { RootState } from '../../store/rootReducer';

import Modal from '../Modal';

import { Content } from './styles';
import { ReactComponent as CloseIcon } from '../../assets/Icon-Close.svg';

interface RemoveToolProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const RemoveToolModal: React.FC<RemoveToolProps> = ({ isOpen, setIsOpen }) => {
  const { selectedTool } = useSelector((state: RootState) => state.tool);
  const dispatch = useDispatch();

  const handleRemoveTool = useCallback(() => {
    if (!selectedTool) {
      return;
    }

    dispatch(deleteTool(selectedTool.id));
    setIsOpen();
  }, [dispatch, selectedTool, setIsOpen]);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} size="small">
      <Content>
        <button type="button" className="close" onClick={setIsOpen}>
          <CloseIcon />
        </button>
        <header>
          <p>Remove tool</p>
        </header>
        <p className="content">
          {`Are you sure you want to remove
            ${selectedTool?.title}?`}
        </p>
        <div>
          <button type="button" className="cancel" onClick={setIsOpen}>
            Cancel
          </button>
          <button type="button" className="remove" onClick={handleRemoveTool}>
            Yes, remove
          </button>
        </div>
      </Content>
    </Modal>
  );
};

export default RemoveToolModal;
