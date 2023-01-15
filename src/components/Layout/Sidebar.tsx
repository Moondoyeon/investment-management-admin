import { flexBox } from '@styles/mixins';
import { HiOutlineLogout, HiOutlineTable, HiOutlineTemplate } from 'react-icons/hi';
import styled from 'styled-components';
import SidebarItem from './SidebarItem';

function Sidebar() {
  return (
    <Container>
      <STitle>D. PREFACE</STitle>
      <ul>
        <SidebarItem menu="대시보드" href="/" Icon={HiOutlineTemplate} />
        <SidebarItem menu="계좌목록" href="/accounts" Icon={HiOutlineTable} />
        <SidebarItem menu="로그아웃" href={null} Icon={HiOutlineLogout} />
      </ul>
    </Container>
  );
}
export default Sidebar;
const Container = styled.div`
  background-color: ${({ theme }) => theme.NAVY};
`;
const STitle = styled.div`
  ${flexBox()};

  height: 8vh;
  font-size: 2.5vw;
  color: white;
`;
