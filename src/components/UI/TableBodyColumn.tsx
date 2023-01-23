import { flexBox } from '@styles/mixins';
import styled, { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

export const TEXT_ALIGN_RIGHT = 'textRight';
export const TEXT_BLUE = 'textBlue';

interface Props {
  type?: string;
  children: React.ReactNode;
  style?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}
function TableBodyColumn({ type, children, style }: Props) {
  if (type === TEXT_ALIGN_RIGHT) return <ColumnTextRight customStyle={style}>{children}</ColumnTextRight>;
  if (type === TEXT_BLUE) return <ColumnTextBlue customStyle={style}>{children}</ColumnTextBlue>;

  return <Column customStyle={style}>{children}</Column>;
}
export default TableBodyColumn;

const Column = styled.td<{ customStyle?: FlattenInterpolation<ThemeProps<DefaultTheme>> }>`
  background-color: white;
  height: 35px;
  font-size: 12px;
  text-align: center;
  padding: 8px;
  ${({ customStyle }) => customStyle}
`;

const ColumnTextRight = styled(Column)`
  ${flexBox('row', 'flex-end')};
  text-align: right;
`;
const ColumnTextBlue = styled(ColumnTextRight)`
  color: ${({ theme }) => theme.BLUE};
  > span {
    cursor: pointer;
  }
`;
