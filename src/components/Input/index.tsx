import React, { useRef, useEffect, HTMLAttributes } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps
  extends HTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  id: string;
  labelText?: string;
  inputType?: string;
  isRequired?: boolean;
  isBig?: boolean;
}

const Input: React.FC<InputProps> = ({
  id,
  labelText,
  isRequired,
  inputType = 'text',
  isBig,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const { fieldName, error, registerField } = useField(id);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: isBig ? textAreaRef.current : inputRef.current,
      path: 'value',
    });
  }, [fieldName, isBig, registerField]);

  return (
    <Container htmlFor={id} name={id} hasError={!!error} isBig={isBig}>
      {labelText && (
        <div className="labelText">
          <p>{labelText}</p>
          {isRequired && (
            <span>
              {'  '}
              &#9733;
            </span>
          )}
        </div>
      )}
      <div className="input">
        {isBig ? (
          <textarea
            id={id}
            name={id}
            ref={textAreaRef}
            autoComplete="off"
            rows={6}
            {...rest}
          />
        ) : (
          <input
            id={id}
            name={id}
            ref={inputRef}
            autoComplete="off"
            type={inputType}
            {...rest}
          />
        )}
      </div>
      {error && <span className="error">{error}</span>}
    </Container>
  );
};

export default Input;
