import React, { useCallback, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useSelector, useDispatch } from 'react-redux';

import { signIn, clearUserErrors } from '../../store';
import { RootState } from '../../store/rootReducer';
import { useNotification } from '../../hooks/notification';

import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content, Spinner } from './styles';
import Input from '../../components/Input';

interface SignInFormData {
  username: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { error, loading } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const { addNotification } = useNotification();

  useEffect(() => {
    if (error) {
      addNotification({
        type: 'error',
        title: 'Authentication error',
        description: error.data.message,
        buttonText: 'Got it!',
      });
    }

    dispatch(clearUserErrors());
  }, [error, addNotification, dispatch]);

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          username: Yup.string().required('Enter your username'),
          password: Yup.string().required('Enter your password'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        dispatch(signIn(data));
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        } else {
          addNotification({
            type: 'error',
            title: 'Authentication Error',
            description: err.message || err,
            buttonText: 'Got it!',
          });
        }
      }
    },
    [addNotification, dispatch],
  );

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Welcome to VUTTR</h1>

          <Input
            id="username"
            className="username"
            labelText="Username"
            placeholder="Username..."
            onBlur={() => formRef.current?.setFieldError('username', '')}
            isRequired
          />

          <Input
            id="password"
            className="password"
            labelText="Password"
            placeholder="Password..."
            onBlur={() => formRef.current?.setFieldError('password', '')}
            inputType="password"
            isRequired
          />

          <button type="submit">{loading ? <Spinner /> : 'Sign In'}</button>
        </Form>

        <p>
          Don&apos;t have an account? <Link to="/signup">Sign up</Link> here
        </p>
      </Content>
    </Container>
  );
};

export default SignIn;
