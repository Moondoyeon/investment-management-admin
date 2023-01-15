import TableBodyColumn from "@components/UI/TableBodyColumn";
import useParseAccountData from "@hooks/useParseAccountData";
import Link from "next/link";
import React from "react";
import { IAccount } from "src/types/account";

interface Props {
  account: IAccount;
}

function TableBodyRow({ account }: Props) {
  const parsedAccount = useParseAccountData({ account });
  return (
    <>
      {parsedAccount.map((item) => {
        if (item.href)
          return (
            <TableBodyColumn key={item.key} type="textBlue">
              <Link href={item.href}>{item.content}</Link>
            </TableBodyColumn>
          );

        if (item.type === "textRight")
          return (
            <TableBodyColumn key={item.key} type="textRight">
              {item.content}
            </TableBodyColumn>
          );

        return <TableBodyColumn key={item.key}>{item.content}</TableBodyColumn>;
      })}
    </>
  );
}

export default TableBodyRow;
