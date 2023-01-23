import Seo from '@components/Layout/Seo';
import useHeaderTitleDispatch from '@hooks/useHeaderTitleDispatch';
import useUsers from '@hooks/useUsers';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { GetServerSideProps } from 'next';
import { useEffect } from 'react';
import { COOKIE_TOKEN_KEY, TOKEN_EXPIRED } from 'src/repositories/CookieTokenRepository';
import { IUser } from 'src/types/user';

function Users() {
  const dispatchTitle = useHeaderTitleDispatch();
  // const {
  //   page,
  //   limit,
  //   search,
  //   dispatchPage,
  //   dispatchSearch,
  //   usersData,
  //   usersTotalLength,
  //   userSettingsData,
  //   userSettingsTotalLength,
  // } = useUsers();

  useEffect(() => {
    dispatchTitle('사용자목록');
  }, []);
  return (
    <>
      <Seo title="D. PREFACE | 사용자목록" />
    </>
  );
}

export default Users;

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  const token = req.cookies[COOKIE_TOKEN_KEY];
  const { page, limit, is_active: isActive = 'all', is_staff: isStaff = 'all', search = '' } = query;
  const initialQuery = { page: Number(page) || 1, limit: Number(limit) || 30, isActive, isStaff, search };
  const queryClient = new QueryClient();

  try {
    const { data, headers } = await axios.get<IUser[]>(`${process.env.NEXT_PUBLIC_SERVER_URL}/users`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const queryFn = () => Promise.resolve({ data, totalLength: Number(headers?.['x-total-count'] ?? 0) });
    await queryClient.prefetchQuery(['users', initialQuery], queryFn);
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 401) {
      res.setHeader('Set-Cookie', [`${COOKIE_TOKEN_KEY}=${TOKEN_EXPIRED}; Path=/`]);
    }
    return {
      redirect: {
        destination: '/signin',
      },
      props: {},
    };
  }

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};
