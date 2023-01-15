import { flexBox } from "@styles/mixins";
import styled from "styled-components";

export const TEXT_ALIGN_RIGHT = "textRight";
export const TEXT_BLUE = "textBlue";

interface Props {
  type?: string;
  children: React.ReactNode;
}
function TableBodyColumn({ type, children }: Props) {
  if (type === TEXT_ALIGN_RIGHT) return <ColumnTextRight>{children}</ColumnTextRight>;
  if (type === TEXT_BLUE) return <ColumnTextBlue>{children}</ColumnTextBlue>;

  return <Column>{children}</Column>;
}
export default TableBodyColumn;

const Column = styled.td`
  background-color: white;
  height: 35px;
  font-size: 12px;
  text-align: center;
  padding: 8px;
`;

const ColumnTextRight = styled(Column)`
  ${flexBox("row", "flex-end")};
  text-align: right;
`;
const ColumnTextBlue = styled(ColumnTextRight)`
  color: ${({ theme }) => theme.BLUE};
  > span {
    cursor: pointer;
  }
`;
