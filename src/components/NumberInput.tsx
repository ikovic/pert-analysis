import React from 'react';
import Input from './Input';

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
};

const NumberInput: React.SFC<Props> = ({ onChange, value }) => (
  <Input onChange={onChange} value={value} />
);

export default NumberInput;
