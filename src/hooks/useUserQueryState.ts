import { useSelector } from 'react-redux';
import { IUserQueryState } from 'src/store/userQuerySlice';

function useUserQueryState() {
  const { userQuery } = useSelector((state: { userQuery: IUserQueryState }) => state);

  const isActive = userQuery?.is_active ?? 'true';
  const isStaff = userQuery?.is_staff ?? 'all';
  const search = userQuery?.search ?? '';
  const page = userQuery?.page;
  const limit = userQuery?.limit;

  return { isActive, isStaff, search, page, limit };
}
export default useUserQueryState;
