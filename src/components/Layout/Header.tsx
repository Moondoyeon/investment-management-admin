import styled from 'styled-components';
import { HiOutlineMenuAlt1, HiOutlineQuestionMarkCircle, HiOutlineBell } from 'react-icons/hi';
import { flexBox } from '@styles/mixins';
import { useSelector } from 'react-redux';

function Header() {
  const { headerTitle } = useSelector((state: { headerTitle: string }) => state);

  return (
    <Container>
      <Wrapper>
        <HiOutlineMenuAlt1 />
        <h2>{headerTitle}</h2>
      </Wrapper>
      <Wrapper>
        <HiOutlineQuestionMarkCircle />
        <HiOutlineBell />
      </Wrapper>
    </Container>
  );
}
export default Header;

const Container = styled.div`
  ${flexBox('row', 'space-between')};
  grid-area: header;
  height: 100px;
  box-shadow: 0 1px 8px ${({ theme }) => theme.GRAY_DARK};
  /* z-index: 3; */
  padding: 0 20px;
  background-color: white;
`;
const Wrapper = styled.div`
  ${flexBox()};
  font-size: 18px;

  > svg {
    font-size: 22px;
  }

  > svg:first-child {
    margin-right: 10px;
  }
`;
