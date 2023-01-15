import styled, { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

interface Props {
  style?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  type: string;
  value: string;
  onChange: React.ChangeEventHandler;
  placeholder: string;
}

function Input({ style, type, value, onChange, placeholder }: Props) {
  return <SInput value={value} onChange={onChange} type={type} placeholder={placeholder} customStyle={style} />;
}
export default Input;

const SInput = styled.input<{ customStyle: FlattenInterpolation<ThemeProps<DefaultTheme>> | undefined }>`
  border: 1px solid ${({ theme }) => theme.GRAY_DARK};
  width: 100%;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  ${({ customStyle }) => customStyle}
`;
