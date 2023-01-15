import { TEXT_ALIGN_RIGHT, TEXT_BLUE } from "@components/UI/TableBodyColumn";
import { ACCOUNT_STATUS, BROKERS } from "src/constants/static";
import { IAccount } from "src/types/account";

interface Props {
  account: IAccount;
}
function useParseAccountData({ account }: Props) {
  const parsedAccount = [
    { key: "broker_id", title: "증권사", content: BROKERS[account.broker_id] },
    { key: "number", title: "계좌번호", content: account.number, href: `/accounts/${account.id}`, type: TEXT_BLUE },
    { key: "user_id", title: "고객명", content: account.user_id, href: `/users/${account.user_id}`, type: TEXT_BLUE },
    { key: "status", title: "운용상태", content: ACCOUNT_STATUS[account.status] },
    { key: "name", title: "계좌명", content: account.name },
    { key: "assets", title: "평가금액", content: Number(account.assets).toLocaleString(), type: TEXT_ALIGN_RIGHT },
    { key: "payments", title: "입금금액", content: Number(account.payments).toLocaleString(), type: TEXT_ALIGN_RIGHT },
    { key: "is_active", title: "계좌상태", content: account.is_active ? "활성" : "비활성" },
    { key: "created_at", title: "계좌개설일", content: account.created_at },
  ];

  return parsedAccount;
}
export default useParseAccountData;
