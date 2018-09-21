import React from 'react';
import styled from 'react-emotion';

/**
 * Base component for various input controls. Removes the default styles and adds our stuff.
 */
const Input = styled.input`
  border: solid black 1px;
  border-radius: 4px;
  outline: none;
  padding: 8px;
`;

export default Input;
