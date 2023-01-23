import { useRouter } from 'next/router';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

interface Props {
  children: React.ReactNode;
}
function Layout({ children }: Props) {
  const { pathname } = useRouter();

  if (pathname === '/signin') return <>{children}</>;

  return (
    <Container>
      <Sidebar />
      <Header />
      <Content>
        <SChildren>{children}</SChildren>
        <Footer />
      </Content>
    </Container>
  );
}
export default Layout;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-areas:
    'sider header'
    'sider content';
`;
const Content = styled.div`
  grid-area: content;
  background-color: ${({ theme }) => theme.GRAY_BG};
`;
const SChildren = styled.div`
  min-height: calc(90vh - 110px);
  padding: 20px;
`;
