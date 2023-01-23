import { flexBox } from '@styles/mixins';
import { HiOutlineLogout, HiOutlineTable, HiOutlineTemplate, HiOutlineUsers } from 'react-icons/hi';
import styled from 'styled-components';
import SidebarItem from './SidebarItem';

function Sidebar() {
  return (
    <Container>
      <STitle>MDY. PREFACE</STitle>
      <ul>
        <SidebarItem menu="대시보드" href="/" Icon={HiOutlineTemplate} />
        <SidebarItem menu="계좌목록" href="/accounts" Icon={HiOutlineTable} />
        <SidebarItem menu="사용자목록" href="/users" Icon={HiOutlineUsers} />
        <SidebarItem menu="로그아웃" href={null} Icon={HiOutlineLogout} />
      </ul>
    </Container>
  );
}
export default Sidebar;
const Container = styled.div`
  grid-area: sider;
  background-color: ${({ theme }) => theme.NAVY};
`;
const STitle = styled.div`
  ${flexBox()};
  height: 10vh;
  font-size: 2vw;
  color: white;
`;
