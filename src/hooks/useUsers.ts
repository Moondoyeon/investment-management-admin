import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import UserService from 'src/services/UserService';
import useUserQueryDispatch from './useUserQueryDispatch';
import useUserQueryState from './useUserQueryState';

function useUsers() {
  const [enabled, setEnabled] = useState(false);
  const router = useRouter();

  const userQuery = useUserQueryState();
  const { page, limit, isActive, isStaff, search } = userQuery;
  const { dispatchPage, dispatchLimit, dispatchIsActive, dispatchIsStaff, dispatchSearch } = useUserQueryDispatch();

  const { data: usersData } = useQuery(
    ['users', { page, limit, search }],
    () => UserService.getUsers({ page, limit, search }),
    {
      ...UserService.userQueryOptions,
      enabled,
    }
  );

  const { data: userSettingsData } = useQuery(
    ['userSettings', { page, limit, isActive, isStaff }],
    () => UserService.getUserSettings({ page, limit, isActive, isStaff }),
    {
      ...UserService.userQueryOptions,
      enabled,
    }
  );

  useEffect(() => {
    const { page = 1, limit = 30, is_active = 'all', is_staff = 'all', search = '' } = router.query;
    dispatchPage(Number(page));
    dispatchLimit(Number(limit));
    dispatchIsActive(String(is_active));
    dispatchIsStaff(String(is_staff));
    dispatchSearch(String(search ?? ''));
    setEnabled(true);
  }, [router.query]);

  return {
    page: Number(userQuery.page),
    limit: Number(userQuery.limit),
    search: String(userQuery.search),
    dispatchPage,
    dispatchSearch,
    usersData: usersData?.data,
    usersTotalLength: usersData?.totalLength,
    userSettingsData: userSettingsData?.data,
    userSettingsTotalLength: userSettingsData?.totalUserSettingLength,
  };
}
export default useUsers;
