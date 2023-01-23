import TableBodyColumn from '@components/UI/TableBodyColumn';
import useParseAccountData from '@hooks/useParseAccountData';
import Link from 'next/link';
import React from 'react';
import { IAccount } from 'src/types/account';

interface Props {
  account: IAccount;
}

function TableBodyRow({ account }: Props) {
  const parsedAccount = useParseAccountData({ account });
  return (
    <>
      {parsedAccount.map(({ key, content, href, type }) => {
        if (href)
          return (
            <TableBodyColumn key={key} type="textBlue">
              <Link href={href}>{content}</Link>
            </TableBodyColumn>
          );

        if (type === 'textRight')
          return (
            <TableBodyColumn key={key} type="textRight">
              {content}
            </TableBodyColumn>
          );

        return <TableBodyColumn key={key}>{content}</TableBodyColumn>;
      })}
    </>
  );
}

export default TableBodyRow;
