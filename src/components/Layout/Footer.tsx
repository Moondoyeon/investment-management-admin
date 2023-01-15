import { flexBox } from '@styles/mixins';
import styled from 'styled-components';

function Footer() {
  return <SFooter>Copyright © December and Company Inc.</SFooter>;
}
export default Footer;

const SFooter = styled.footer`
  ${flexBox()};
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.GRAY_LIGHT};
`;
