import React from 'react';
import styled from 'styled-components';

interface Props {
  options: [string, string][];
  handleSelectChange: (option: string) => void;
  dispatchPage: (page: number) => void;
  value: string;
}
function SelectBox({ options, handleSelectChange, dispatchPage, value }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleSelectChange(e.target.value);
    dispatchPage(1);
  };
  return (
    <Select value={value} onChange={handleChange}>
      {options.map(([id, name]) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </Select>
  );
}
export default SelectBox;

const Select = styled.select`
  width: 140px;
  height: 30px;
  padding: 5px 10px;
  font-size: 13px;
  border: 1px solid ${({ theme }) => theme.GRAY_DARK};

  &:focus {
    outline: none;
  }

  & + select {
    margin-left: 10px;
  }
`;
