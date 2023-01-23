import { flexBox } from '@styles/mixins';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { PER_PAGE } from 'src/constants/static';
import { IAccount } from 'src/types/account';
import styled from 'styled-components';

interface Props {
  data: IAccount[];
  totalLength: number;
  page: number;
  limit: number;
  dispatchPage: (page: number) => void;
}
function Pagenation({ data, totalLength, page, limit, dispatchPage }: Props) {
  const handlePrevClick = () => dispatchPage(page - 1);
  const handleNextClick = () => dispatchPage(page + 1);
  const handleTargetPageClick = (targetPage: number) => dispatchPage(targetPage);
  const totalPage = Math.ceil(Number(totalLength) / limit);

  const generatePage = () => {
    let startPage = (page - 1) / PER_PAGE;
    startPage = Math.floor(startPage) * PER_PAGE + 1;
    return new Array(5)
      .fill(null)
      .map((_, i) => i + startPage)
      .filter((el) => el <= totalPage);
  };

  return (
    <Container>
      <Button disabled={page === 1} onClick={handlePrevClick}>
        <HiOutlineChevronLeft />
      </Button>

      {generatePage().map((i: number) => (
        <PageButton key={i} onClick={() => handleTargetPageClick(i)} className={i === page ? ' active' : ''}>
          {i}
        </PageButton>
      ))}

      <Button disabled={data.length < limit} onClick={handleNextClick}>
        <HiOutlineChevronRight />
      </Button>
    </Container>
  );
}
export default Pagenation;

const Container = styled.div`
  width: 100%;
  ${flexBox('row', 'flex-end')}
  padding:10px 5px;
`;
const Button = styled.button<{ disabled: boolean }>`
  font-size: 25px;
  color: ${({ disabled, theme }) => (disabled ? theme.GRAY_DARK : theme.NAVY)};
`;

const PageButton = styled.button`
  padding: 0 20px;

  &.active {
    font-weight: bold;
    color: ${({ theme }) => theme.BLUE};
  }
`;
