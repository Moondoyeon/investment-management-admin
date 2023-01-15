import setQueryParams from "@utils/setQueryParams";
import { useDispatch } from "react-redux";
import { setBrokerId, setIsActive, setLimit, setPage, setSearch, setStatus } from "src/store/accountQuerySlice";

function useAccountQueryDispatch() {
  const dispatch = useDispatch();

  const dispatchBrokerId = (brokerId: string) => {
    dispatch(setBrokerId(brokerId));
    setQueryParams({ broker_id: brokerId });
  };

  const dispatchStatus = (status: string) => {
    dispatch(setStatus(status));
    setQueryParams({ status });
  };

  const dispatchIsActive = (isActive: string) => {
    dispatch(setIsActive(isActive));
    setQueryParams({ is_active: isActive });
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

  return { dispatchBrokerId, dispatchStatus, dispatchIsActive, dispatchPage, dispatchSearch, dispatchLimit };
}
export default useAccountQueryDispatch;
