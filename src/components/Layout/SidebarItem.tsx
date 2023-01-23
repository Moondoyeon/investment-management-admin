import useSignout from '@hooks/useSignout';
import { flexBox } from '@styles/mixins';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconType } from 'react-icons/lib';
import styled from 'styled-components';

interface Props {
  menu: string;
  href: string | null;
  Icon: IconType;
}
function SidebarItem({ menu, href, Icon }: Props) {
  const { pathname } = useRouter();
  const handleSingoutClcik = useSignout();
  const isSelected = pathname === href;

  if (href)
    return (
      <Container isSelected={isSelected}>
        <Link href={href}>
          <a>
            <Icon />
            <h3>{menu}</h3>
          </a>
        </Link>
      </Container>
    );

  return (
    <Container onClick={handleSingoutClcik}>
      <a>
        <Icon />
        <h3>{menu}</h3>
      </a>
    </Container>
  );
}
export default SidebarItem;

const Container = styled.li<{ isSelected?: boolean }>`
  padding: 15px 20px;
  color: white;
  background-color: ${({ theme, isSelected }) => (isSelected ? theme.BLUE : 'none')};
  a {
    ${flexBox('row', 'flex-start')}
    h3 {
      font-size: 18px;
    }
    svg {
      margin-right: 10px;
      font-size: 24px;
    }
  }
`;
