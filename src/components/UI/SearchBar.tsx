import { flexBox } from '@styles/mixins';
import { ChangeEvent, useEffect, useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import styled from 'styled-components';

interface Props {
  search: string;
  dispatchSearch: (search: string) => void;
  dispatchPage: (page: number) => void;
}
function SearchBar({ search, dispatchSearch, dispatchPage }: Props) {
  const [keyword, setKeyword] = useState(search);
  const handleInitClick = () => {
    dispatchSearch('');
    setKeyword('');
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (keyword) {
      dispatchSearch(keyword);
      dispatchPage(1);
      // setKeyword("");
    }
  };
  useEffect(() => {
    if (search) setKeyword(search);
  }, [search]);

  return (
    <Form onSubmit={handleSubmit}>
      <ButtonInitial type="button" onClick={handleInitClick}>
        초기화
      </ButtonInitial>
      <Input placeholder="검색어를 입력해주세요" value={keyword} onChange={handleInputChange} />
      <Button type="submit">
        <HiOutlineSearch />
      </Button>
    </Form>
  );
}

export default SearchBar;

const Form = styled.form`
  ${flexBox()}
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.GRAY_DARK};
  padding: 5px;
  font-size: 14px;
  margin-right: 5px;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
`;

const ButtonInitial = styled(Button)`
  width: 50px;
  font-size: 13px;
  margin-right: 5px;
  border: 1px solid ${({ theme }) => theme.GRAY_DARK};
  border-radius: 3px;
`;
