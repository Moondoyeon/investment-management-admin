import Seo from '@components/Layout/Seo';
import AlertModal from '@components/signin/AlertModal';
import FormTitle from '@components/signin/FormTitle';
import Button from '@components/UI/Button';
import Input from '@components/UI/Input';
import useSignin from '@hooks/useSignin';
import { flexBox } from '@styles/mixins';
import { GetServerSideProps } from 'next';
import { HiLogin, HiOutlineUser } from 'react-icons/hi';
import { COOKIE_TOKEN_KEY, TOKEN_EXPIRED } from 'src/repositories/CookieTokenRepository';
import styled from 'styled-components';

interface Props {
  isExpired: boolean;
}
function SigninPage({ isExpired }: Props) {
  const { email, password, isAuthValid, handleEmailChange, handlePasswordChange, handleSubmit } = useSignin();
  return (
    <Container>
      <Seo title="D. PREFACE | 로그인" />
      <Title>PREFACE</Title>
      <SubContainer>
        <AlertModal isExpired={isExpired} />
        <FormTitle Icon={HiOutlineUser}>로그인</FormTitle>
        <Form onSubmit={handleSubmit}>
          <Input value={email} onChange={handleEmailChange} type="text" placeholder="아이디를 입력하세요" />
          <Input value={password} onChange={handlePasswordChange} type="password" placeholder="비밀번호를 입력하세요" />
          <Button type="submit" Icon={HiLogin} isValid={isAuthValid}>
            로그인
          </Button>
        </Form>
      </SubContainer>
    </Container>
  );
}

export default SigninPage;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const token = req.cookies[COOKIE_TOKEN_KEY];
  if (token === TOKEN_EXPIRED) {
    res.setHeader('Set-Cookie', [`${COOKIE_TOKEN_KEY}=;max-age=-1; Path=/`]);
    return {
      props: {
        isExpired: true,
      },
    };
  }

  return { props: {} };
};
const Container = styled.div`
  ${flexBox('column')};
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.GRAY_BG};
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.NAVY};
  margin-bottom: 60px;
`;

const SubContainer = styled.div`
  width: 400px;
  background-color: white;
  box-shadow: 0 0 5px ${({ theme }) => theme.GRAY_DARK};
  border-radius: 5px;
`;
const Form = styled.form`
  ${flexBox('column', 'space-between')}
  width:100%;
  height: 230px;
  padding: 30px 20px;
`;
