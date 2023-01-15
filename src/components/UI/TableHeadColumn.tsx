import styled, { DefaultTheme, FlattenInterpolation, ThemeProps } from "styled-components";

interface Props {
  children: React.ReactNode;
  style?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}
function TableHeadColumn({ children, style }: Props) {
  return <Column customStyle={style}>{children}</Column>;
}
export default TableHeadColumn;

const Column = styled.th<{ customStyle?: FlattenInterpolation<ThemeProps<DefaultTheme>> }>`
  padding: 10px;
  font-size: 12px;
  font-weight: 600;
  ${({ customStyle }) => customStyle}
`;
