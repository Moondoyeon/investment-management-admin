import setQueryParams from '@utils/setQueryParams';
import { useDispatch } from 'react-redux';
import { setIsActive, setLimit, setPage, setSearch } from 'src/store/accountQuerySlice';
import { setIsStaff } from 'src/store/userQuerySlice';

function useUserQueryDispatch() {
  const dispatch = useDispatch();

  const dispatchIsActive = (isActive: string) => {
    dispatch(setIsActive(isActive));
    setQueryParams({ is_active: isActive });
  };
  const dispatchIsStaff = (isStaff: string) => {
    dispatch(setIsStaff(isStaff));
    setQueryParams({ is_staff: isStaff });
  };
  const dispatchPage = (page: number) => {
    dispatch(setPage(page));
    setQueryParams({ page });
  };
  const dispatchSearch = (search: string) => {
    dispatch(setSearch(search.trim()));
    setQueryParams({ search: search.trim() });
  };

  const dispatchLimit = (limit: number) => {
    dispatch(setLimit(limit));
    setQueryParams({ limit });
  };

  return { dispatchIsActive, dispatchIsStaff, dispatchPage, dispatchSearch, dispatchLimit };
}
export default useUserQueryDispatch;
