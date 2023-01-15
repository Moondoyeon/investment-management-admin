import { flexBox } from '@styles/mixins';
import { IconType } from 'react-icons/lib';
import styled, { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

interface Props {
  type: 'button' | 'submit' | 'reset' | undefined;
  children: React.ReactNode;
  Icon: IconType;
  isValid: boolean;
  style?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}
function Button({ type, Icon, isValid, style, children }: Props) {
  return (
    <SButton type={type} disabled={!isValid} isValid={isValid} customStyle={style}>
      <Icon />
      {children}
    </SButton>
  );
}
export default Button;
const SButton = styled.button<{
  isValid: boolean;
  customStyle: FlattenInterpolation<ThemeProps<DefaultTheme>> | undefined;
}>`
  ${flexBox()};
  width: 100%;
  height: 45px;
  background-color: ${({ theme, isValid }) => (isValid ? theme.NAVY : theme.GRAY_MEDIUM)};
  border: 1px solid ${({ theme, isValid }) => (isValid ? theme.NAVY : theme.GRAY_DARK)};
  font-size: 16px;
  color: ${({ theme, isValid }) => (isValid ? 'white' : theme.GRAY_DARK)};
  ${({ customStyle }) => customStyle};

  > svg {
    transform: translateY(-1.8px);
    margin-right: 8px;
    font-size: 18px;
  }
`;
