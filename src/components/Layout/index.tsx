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
      <div>
        <Header />
        <Content>
          <SChildren>{children}</SChildren>
          <Footer />
        </Content>
      </div>
    </Container>
  );
}
export default Layout;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 5fr;
`;
const Content = styled.div`
  background-color: ${({ theme }) => theme.GRAY_BG};
`;
const SChildren = styled.div`
  min-height: calc(90vh - 80px);
  padding: 20px;
`;
