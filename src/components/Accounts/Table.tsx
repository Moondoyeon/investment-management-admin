import { IAccount } from 'src/types/account';
import styled from 'styled-components';
import TableBodyRow from './TableBodyRow';
import TableHeadRow from './TableHeadRow';

interface Props {
  accounts: IAccount[] | [];
}
function Table({ accounts }: Props) {
  return (
    <STable>
      <THead>
        <Row>
          <TableHeadRow />
        </Row>
      </THead>
      <TBody>
        {accounts.map((account) => (
          <Row key={account.uuid}>
            <TableBodyRow account={account} />
          </Row>
        ))}
      </TBody>
    </STable>
  );
}
export default Table;

const STable = styled.table`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.GRAY_BG};
`;
const THead = styled.thead`
  background-color: ${({ theme }) => theme.GRAY_DARK};
`;
const TBody = styled.tbody`
  & > tr {
    border-bottom: 1px solid ${({ theme }) => theme.GRAY_BG};
  }
`;
const Row = styled.tr`
  display: grid;
  grid-template-columns: 2fr 2fr 1.6fr 2fr 2fr 2fr 2fr 1.6fr 2fr;
  grid-gap: 1px;

  &:first-child {
    border-bottom: 1px solid ${({ theme }) => theme.GRAY_BG};
  }
`;
