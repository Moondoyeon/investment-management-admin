import { useSelector } from "react-redux";
import { IAccountQueryState } from "src/store/accountQuerySlice";

function useAccountQueryState() {
  const { accountQuery } = useSelector((state: { accountQuery: IAccountQueryState }) => state);

  const brokerId = accountQuery.broker_id ?? "all";
  const status = accountQuery.status ?? "all";
  const isActive = accountQuery.is_active ?? "all";
  const search = accountQuery.search ?? "";
  const { page, limit } = accountQuery;

  return { brokerId, status, isActive, search, page, limit };
}
export default useAccountQueryState;
