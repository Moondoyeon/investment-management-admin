import Table from '@components/AccountDetail/Table';
import Seo from '@components/Layout/Seo';
import useHeaderTitleDispatch from '@hooks/useHeaderTitleDispatch';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useEffect } from 'react';
import { COOKIE_TOKEN_KEY } from 'src/repositories/CookieTokenRepository';
import { IAccount } from 'src/types/account';
import styled from 'styled-components';

interface Props {
  account: IAccount;
}
function AccountDetailPage({ account }: Props) {
  const dispatchTitle = useHeaderTitleDispatch();

  useEffect(() => {
    dispatchTitle('계좌상세');
  }, []);

  return (
    <>
      <Seo title="D. PREFACE | 계좌상세" />
      <Title>계좌정보</Title>
      <Table account={account} />
    </>
  );
}
export default AccountDetailPage;

const Title = styled.h2`
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
`;

export const getServerSideProps: GetServerSideProps = async ({ params, req }) => {
  const token = req.cookies[COOKIE_TOKEN_KEY];
  const id = params?.accountId;
  let accountDetailRes;

  try {
    accountDetailRes = await axios.get<IAccount>(`${process.env.NEXT_PUBLIC_SERVER_URL}/accounts/${id}`, {
      headers: { Authorization: `Bearer: ${token}` },
    });
  } catch {
    return { props: {} };
  }

  return { props: { account: accountDetailRes?.data } };
};
