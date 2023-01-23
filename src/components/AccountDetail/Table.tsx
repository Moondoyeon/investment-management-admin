import { IAccount } from 'src/types/account';
import styled from 'styled-components';
import BodyColumns from './BodyColumns';

interface Props {
  account: IAccount;
}
function Table({ account }: Props) {
  return (
    <TBody>
      <Row>
        <BodyColumns account={account} />
      </Row>
    </TBody>
  );
}
export default Table;

const TBody = styled.tbody``;
const Row = styled.tr`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 2fr 1fr 2fr;
  width: 80vw;
  grid-gap: 1px;

  &:first-child {
    border-bottom: 1px solid ${({ theme }) => theme.GRAY_BG};
  }
`;
