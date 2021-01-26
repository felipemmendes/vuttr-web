import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  ChangeEvent,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTools, signOut } from '../../store';
import { RootState } from '../../store/rootReducer';
import { useNotification } from '../../hooks/notification';

import {
  Container,
  Content,
  Header,
  Bar,
  SearchArea,
  Checkbox,
  Spinner,
} from './styles';
import SearchInput from '../../components/SearchInput';
import ToolCard from '../../components/ToolCard';
import AddToolModal from '../../components/AddToolModal';
import RemoveToolModal from '../../components/RemoveToolModal';

import { ReactComponent as SearchIcon } from '../../assets/Icon-Search.svg';
import { ReactComponent as AddIcon } from '../../assets/Icon-Close.svg';

export interface Tool {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

const Main: React.FC = () => {
  const { loading, tools } = useSelector((state: RootState) => state.tool);
  const { error } = useSelector((state: RootState) => state.tool);
  const dispatch = useDispatch();

  const { addNotification } = useNotification();

  const checkboxRef = useRef<HTMLInputElement>(null);

  const [modalOpen, setModalOpen] = useState('');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetch = setTimeout(() => {
      dispatch(
        fetchTools({
          text: searchText,
          tagSearch: checkboxRef.current?.checked,
        }),
      );
    }, 500);

    return () => clearTimeout(fetch);
  }, [dispatch, searchText]);

  useEffect(() => {
    if (error) {
      addNotification({
        type: 'error',
        title: 'Something went wrong',
        description: error.data.message,
        buttonText: 'Got it!',
      });
    }

    if (error && error.status === 401) {
      dispatch(signOut());
    }
  }, [error, addNotification, dispatch]);

  const handleSearchInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchText(event.target.value);
    },
    [],
  );

  const handleTagSearch = useCallback(() => {
    dispatch(
      fetchTools({
        text: searchText,
        tagSearch: checkboxRef.current?.checked,
      }),
    );
  }, [dispatch, searchText]);

  const handleOpenAddModal = useCallback(() => {
    setModalOpen('Add');
  }, []);

  const handleOpenRemoveModal = useCallback(() => {
    setModalOpen('Remove');
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalOpen('');
  }, []);

  return (
    <Container>
      <AddToolModal isOpen={modalOpen === 'Add'} setIsOpen={handleCloseModal} />
      <RemoveToolModal
        isOpen={modalOpen === 'Remove'}
        setIsOpen={handleCloseModal}
      />
      <Content>
        <button
          type="button"
          className="sign-out"
          onClick={() => dispatch(signOut())}
        >
          Sign Out
        </button>
        <Header>
          <h1>VUTTR</h1>
          <h3>Very Useful Tools to Remember</h3>
        </Header>
        <Bar>
          <SearchArea>
            <SearchInput
              id="searchInput"
              icon={SearchIcon}
              placeholder="Search..."
              value={searchText}
              onChange={handleSearchInput}
            />
            <Checkbox htmlFor="tagCheck" className="checkbox">
              <input
                id="tagCheck"
                type="checkbox"
                ref={checkboxRef}
                onChange={handleTagSearch}
              />
              search in tags only
            </Checkbox>
          </SearchArea>
          <button type="button" onClick={handleOpenAddModal}>
            <AddIcon className="icon-add" />
            Add
          </button>
        </Bar>
        <div>
          {loading ? (
            <Spinner>
              <div />
            </Spinner>
          ) : (
            <ul>
              {tools.map((tool) => (
                <li>
                  <ToolCard
                    key={tool.id}
                    tool={tool}
                    setIsOpen={handleOpenRemoveModal}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </Content>
    </Container>
  );
};

export default Main;
