import React, { ElementType, InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ElementType;
  id: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  icon: Icon,
  id,
  ...rest
}) => {
  return (
    <Container htmlFor={id}>
      <div>
        {Icon && <Icon />}
        <input id={id} autoComplete="off" {...rest} />
      </div>
    </Container>
  );
};

export default SearchInput;
