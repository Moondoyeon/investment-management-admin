/* eslint-disable no-console */
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AccountsService from 'src/services/AccountService';
import useAccountQueryDispatch from './useAccountQueryDispatch';
import useAccountQueryState from './useAccountQueryState';

function useAccounts() {
  const [enabled, setEnabled] = useState(false);
  // 쿼리가 자동으로 실행되지 않게 설정. false 값이 전달되면 쿼리가 비활성화된다.
  // 데이터 요청에 사용할 파라미터가 유효한 값일 때만 true를 할당하는 식으로 활용할 수 있다.
  const router = useRouter();
  const accountQuery: Record<string, string | number | boolean | string[]> = useAccountQueryState();

  const { dispatchBrokerId, dispatchIsActive, dispatchLimit, dispatchPage, dispatchSearch, dispatchStatus } =
    useAccountQueryDispatch();

  const { data } = useQuery(['accounts', accountQuery], () => AccountsService.getAccounts(accountQuery), {
    ...AccountsService.accountsQueryOptions,
    enabled,
  });

  useEffect(() => {
    const { page = 1, limit = 30, broker_id = 'all', status = 'all', is_active = 'all', search = '' } = router.query;

    dispatchPage(Number(page));
    dispatchLimit(Number(limit));
    dispatchBrokerId(String(broker_id));
    dispatchStatus(String(status));
    dispatchIsActive(String(is_active));
    dispatchSearch(String(search ?? ''));
    setEnabled(true);
  }, [router.query]);

  return {
    page: Number(accountQuery.page),
    limit: Number(accountQuery.limit),
    search: String(accountQuery.search),
    dispatchPage,
    dispatchSearch,
    accountQuery,
    data: data?.data,
    totalLength: data?.totalLength ?? 0,
  };
}
export default useAccounts;
