import React, { useCallback, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useSelector, useDispatch } from 'react-redux';

import { signUp, clearUserErrors } from '../../store';
import { RootState } from '../../store/rootReducer';
import { useNotification } from '../../hooks/notification';

import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content, Spinner } from './styles';
import Input from '../../components/Input';

interface SignUpFormData {
  username: string;
  password: string;
  password_confirmation: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { error, loading } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const { addNotification } = useNotification();

  useEffect(() => {
    if (error) {
      if (error.status === 409) {
        formRef.current?.setErrors({
          username: error.data.message,
        });
      } else {
        addNotification({
          type: 'error',
          title: 'Something happened',
          description: error.data.message,
          buttonText: 'Got it!',
        });
      }
      dispatch(clearUserErrors());
    }
  }, [error, addNotification, dispatch]);

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          username: Yup.string()
            .min(3, 'Username needs to be at least 3 characters long')
            .required('Enter your username'),
          password: Yup.string()
            .min(6, 'Password must be at least 6 characters long')
            .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/, {
              excludeEmptyString: true,
              message:
                'Password must contain at least one lowercase letter, one uppercase letter and one number',
            })
            .required('Enter your password'),
          password_confirmation: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords do not match')
            .required('Re-enter your password'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        dispatch(signUp(data));
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        } else {
          addNotification({
            type: 'error',
            title: 'Something happened',
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
          <h1>Sign up to VUTTR</h1>

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

          <Input
            id="password_confirmation"
            className="password-confirmation"
            labelText="Password confirmation"
            placeholder="Password cofirmation..."
            onBlur={() => {
              formRef.current?.setFieldError('password_confirmation', '');
            }}
            inputType="password"
            isRequired
          />

          <button type="submit">{loading ? <Spinner /> : 'Sign Up'}</button>
        </Form>

        <Link to="/signin">Return to Sign in</Link>
      </Content>
    </Container>
  );
};

export default SignUp;
