import getQueryString from "@utils/getQueryString";
import axiosInstance from "src/api/instance";
import { IAccount } from "src/types/account";

const AccountsService = {
  accountsQueryOptions: {
    staleTime: 1000 * 60 * 3,
    // 데이터가 fresh 상태로 유지되는 시간. 해당 시간이 지나면 stale 상태가 됨. default : 0
    // fresh 상태에서는 쿼리가 다시 mount 되어도 fetch 실행 x
    keepPreviousData: true,
    // 쿼리 키(ex.페이지 번호)가 변경되어서 새로운 데이터를 요청하는 동안에도 마지막 data값을 유지한다.
    // 페이지네이션을 구현할 때 유용하다. 캐시되지 않은 페이지를 가져올 때 화면에서 목록이 사라지는 깜빡임 현상을 방지할 수 있다.
  },

  accountQueryConverter(key: string) {
    switch (key) {
      case "page":
        return "_page";
      case "limit":
        return "_limit";
      case "brokerId":
        return "broker_id";
      case "isActive":
        return "is_active";
      case "search":
        return "q";
      default:
        return key;
    }
  },

  async getAccounts(params: Record<string, string | number | boolean | string[]>) {
    const { data, headers } = await axiosInstance({ bearer: true }).get<IAccount[]>(
      `/accounts?${getQueryString(params, this.accountQueryConverter)}`
    );
    return { data, totalLength: Number(headers?.["x-total-count"] ?? 0) };
  },
};
export default AccountsService;
