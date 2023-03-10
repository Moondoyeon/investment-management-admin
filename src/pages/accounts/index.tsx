import Filters from '@components/Accounts/Filters';
import Pagenation from '@components/Accounts/Pagenation';
import Table from '@components/Accounts/Table';
import Seo from '@components/Layout/Seo';
import SearchBar from '@components/UI/SearchBar';
import useAccounts from '@hooks/useAccounts';
import useHeaderTitleDispatch from '@hooks/useHeaderTitleDispatch';
import { flexBox } from '@styles/mixins';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import getQueryString from '@utils/getQueryString';
import axios, { AxiosError } from 'axios';
import { GetServerSideProps } from 'next';
import { useEffect } from 'react';
import { COOKIE_TOKEN_KEY, TOKEN_EXPIRED } from 'src/repositories/CookieTokenRepository';
import AccountsService from 'src/services/AccountService';
import { IAccount } from 'src/types/account';
import styled from 'styled-components';

function Accounts() {
  const dispatchTitle = useHeaderTitleDispatch();
  const { page, limit, search, dispatchPage, dispatchSearch, data, totalLength } = useAccounts();

  useEffect(() => {
    dispatchTitle('계좌목록');
  }, []);

  return (
    <>
      <Seo title="D. PREFACE | 계좌목록" />
      <FilterAndSearch>
        <Filters />
        <SearchBar search={search} dispatchSearch={dispatchSearch} dispatchPage={dispatchPage} />
      </FilterAndSearch>
      <Table accounts={data || []} />
      <Pagenation
        data={data || []}
        totalLength={totalLength}
        page={page}
        limit={limit}
        dispatchPage={dispatchPage}
      />
    </>
  );
}

export default Accounts;

const FilterAndSearch = styled.div`
  ${flexBox('row', 'space-between')}
  margin-bottom:10px;
`;
export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  const token = req.cookies[COOKIE_TOKEN_KEY];

  const { page, limit, broker_id: brokerId = 'all', status = 'all', is_active: isActive = 'all', search = '' } = query;
  const initialQuery = { page: Number(page) || 1, limit: Number(limit) || 30, brokerId, status, isActive, search };
  const queryClient = new QueryClient();

  try {
    const { data, headers } = await axios.get<IAccount[]>(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/accounts?${getQueryString(
        initialQuery,
        AccountsService.accountQueryConverter
      )}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const queryFn = () => Promise.resolve({ data, totalLength: headers?.['x-total-count'] ?? 0 });
    await queryClient.prefetchQuery(['accounts', initialQuery], queryFn);
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 401) {
      res.setHeader('Set-Cookie', [`${COOKIE_TOKEN_KEY}=${TOKEN_EXPIRED}; Path=/`]);
      return {
        redirect: {
          destination: '/signin',
        },
        props: {},
      };
    }
  }

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};
