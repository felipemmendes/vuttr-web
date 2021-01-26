import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { selectTool } from '../../store';

import { Container, TopBar, Tags } from './styles';
import { ReactComponent as CloseIcon } from '../../assets/Icon-Close.svg';

import { Tool } from '../../pages/Main';

interface ToolCardProps {
  tool: Tool;
  setIsOpen(): void;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, setIsOpen }) => {
  const dispatch = useDispatch();

  const handleRemoveTool = useCallback(() => {
    setIsOpen();
    dispatch(selectTool(tool));
  }, [dispatch, tool, setIsOpen]);

  return (
    <Container>
      <TopBar>
        <a href={tool.link} target="_blank" rel="noopener noreferrer">
          <h5>{tool.title}</h5>
        </a>
        <button type="button" onClick={handleRemoveTool}>
          <CloseIcon className="icon-remove" />
          remove
        </button>
      </TopBar>
      <p>{tool.description}</p>
      <Tags>
        {tool.tags.map((tag) => (
          <span key={tag}>{`#${tag}`}</span>
        ))}
      </Tags>
    </Container>
  );
};

export default ToolCard;
