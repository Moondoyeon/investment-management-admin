import { flexBox } from '@styles/mixins';
import { IconType } from 'react-icons/lib';
import styled from 'styled-components';

interface Props {
  Icon: IconType;
  children: React.ReactNode;
}
function FormTitle({ Icon, children }: Props) {
  return (
    <Container>
      <Icon />
      {children}
    </Container>
  );
}
export default FormTitle;

const Container = styled.div`
  ${flexBox('row', 'flex-start')};
  width: 100%;
  height: 50px;
  padding: 20px;
  background-color: ${({ theme }) => theme.GRAY_LIGHT};

  > svg {
    transform: translateY(-1.5px); // 위로이동
    margin-right: 8px;
    font-size: 18px;
  }
`;
