import React, { useRef, useCallback } from 'react';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useSelector, useDispatch } from 'react-redux';

import { createTool } from '../../store';
import { RootState } from '../../store/rootReducer';

import getValidationErrors from '../../utils/getValidationErrors';
import { useNotification } from '../../hooks/notification';

import { ModalHeader, Content, ConfirmButton } from './styles';
import Input from '../Input';
import Modal from '../Modal';
import { ReactComponent as CloseIcon } from '../../assets/Icon-Close.svg';

interface AddToolModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

interface NewToolFormData {
  title: string;
  link: string;
  description: string;
  tags: string;
}

const AddToolModal: React.FC<AddToolModalProps> = ({ isOpen, setIsOpen }) => {
  const formRef = useRef<FormHandles>(null);
  const { error } = useSelector((state: RootState) => state.tool);
  const dispatch = useDispatch();
  const { addNotification } = useNotification();

  const handleSubmit = useCallback(
    async (data: NewToolFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          title: Yup.string().required("Please, fill the tool's name"),
          link: Yup.string().required("Please, fill the tool's url"),
          description: Yup.string().required(
            "Please, fill the tool's description",
          ),
          tags: Yup.string().required('Please, add at least one tag'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { title, link, description, tags } = data;
        const formattedTags = tags.split(',').map((tag) => tag.trim());

        const formattedData = {
          title,
          link,
          description,
          tags: formattedTags,
        };

        dispatch(createTool(formattedData));

        if (error) {
          addNotification({
            type: 'error',
            title: 'Unexpected error',
            description:
              'An unexpected error ocurred when creating the tool. Try again in a few minutes.',
            buttonText: 'Got it!',
          });
        } else {
          setIsOpen();

          addNotification({
            type: 'success',
            title: 'Success!',
            description:
              'You have successfully added a new Very Useful Tool to Remember.',
            buttonText: 'Yay!',
          });
        }
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        } else {
          addNotification({
            type: 'error',
            title: 'Unexpected error',
            description:
              'An unexpected error ocurred when creating the tool. Try again in a few minutes.',
            buttonText: 'Got it!',
          });
        }
      }
    },
    [dispatch, addNotification, error, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} size="medium">
      <ModalHeader>
        <button type="button" className="close" onClick={setIsOpen}>
          <CloseIcon />
        </button>
        <header>
          <p>Add new tool</p>
        </header>
      </ModalHeader>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit} id="addTool">
          <Input
            id="title"
            className="title"
            labelText="Tool Name"
            placeholder="Tool Name..."
            isRequired
          />
          <Input
            id="link"
            className="link"
            labelText="Tool Link"
            placeholder="Tool Link..."
            isRequired
          />
          <Input
            id="description"
            className="description"
            labelText="Tool description"
            placeholder="Tool Description..."
            isRequired
            isBig
          />
          <Input
            id="tags"
            className="tags"
            labelText="Tags"
            placeholder="Tag 1, Tag 2..."
            isRequired
          />
        </Form>
      </Content>
      <ConfirmButton type="submit" form="addTool">
        Add Tool
      </ConfirmButton>
    </Modal>
  );
};

export default AddToolModal;
