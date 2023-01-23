import TableBodyColumn from '@components/UI/TableBodyColumn';
import TableHeadColumn from '@components/UI/TableHeadColumn';
import useAccountNameEdit from '@hooks/useAccountNameEdit';
import Link from 'next/link';

import React, { useRef } from 'react';
import { IAccount } from 'src/types/account';
import styled, { css } from 'styled-components';

interface Props {
  account: IAccount;
}
function BodyColumns({ account }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { isEditMode, parsedAccount, handleEditCancle, handleEditClcik, handleSubmitClick } = useAccountNameEdit(
    inputRef,
    account
  );

  return (
    <>
      {parsedAccount.map(({ key, title, content, href }) => {
        if (key === 'user_id' && href)
          return (
            <React.Fragment key={key}>
              <TableHeadColumn style={Column}>{title}</TableHeadColumn>
              <Link href={href}>
                <TableBodyColumn style={BodyColumn} type="textBlue">
                  {content}
                </TableBodyColumn>
              </Link>
            </React.Fragment>
          );

        if (key === 'name')
          return (
            <React.Fragment key={key}>
              <TableHeadColumn style={Column}>
                {title}
                {isEditMode && <CancleButton onClick={handleEditCancle}>취소</CancleButton>}
                <Button onClick={isEditMode ? handleSubmitClick : handleEditClcik}>
                  {isEditMode ? '확인' : '편집'}
                </Button>
              </TableHeadColumn>

              <TableBodyColumn style={BodyColumn} type="textRight">
                {isEditMode ? <Input ref={inputRef} defaultValue={content} /> : content}
              </TableBodyColumn>
            </React.Fragment>
          );

        return (
          <React.Fragment key={key}>
            <TableHeadColumn style={Column}>{title}</TableHeadColumn>
            <TableBodyColumn style={BodyColumn} type="textRight">
              {content}
            </TableBodyColumn>
          </React.Fragment>
        );
      })}
    </>
  );
}
export default BodyColumns;

const BodyColumn = css`
  height: 80px;
  font-size: 15px;
  border: 1px solid ${({ theme }) => theme.GRAY_DARK};
`;

const Column = css`
  padding-top: 33.5px;
  font-size: 15px;
  border: 1px solid ${({ theme }) => theme.GRAY_DARK};
`;

const Button = styled.button`
  position: absolute;
  right: 3px;
  bottom: 3px;
  padding: 3px;
  border: 1px solid ${({ theme }) => theme.BLUE};
  color: ${({ theme }) => theme.BLUE};
  font-size: 10px;
`;

const CancleButton = styled(Button)`
  right: 30px;
  border: 1px solid ${({ theme }) => theme.GRAY_DARK};
  color: ${({ theme }) => theme.GRAY_DARK};
`;

const Input = styled.input`
  width: 100%;
  text-align: right;
  padding: 5px;
`;
