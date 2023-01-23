import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import AccountsService from 'src/services/AccountService';
import { IAccount } from 'src/types/account';
import useEdit from './useEdit';
import useParseAccountData from './useParseAccountData';

function useAccountNameEdit(inputRef: React.RefObject<HTMLInputElement>, account: IAccount) {
  const [accountData, setAccountData] = useState(account);
  const { isEditMode, handleEditCancle, handleEditClcik } = useEdit();
  const queryClient = useQueryClient();
  const { mutate } = useMutation((data: { name: string }) => AccountsService.patchAccountName(account.uuid, data), {
    onSuccess: (data) => {
      setAccountData(data);
      queryClient.invalidateQueries(['accounts']);
    },
  });
  const parsedAccount = useParseAccountData({ account: accountData });

  const handleSubmitClick = () => {
    if (inputRef.current) mutate({ name: inputRef.current.value });
    handleEditCancle();
  };

  useEffect(() => {
    if (isEditMode) inputRef.current?.focus();
  }, [isEditMode]);

  return {
    isEditMode,
    handleEditCancle,
    handleEditClcik,
    handleSubmitClick,
    parsedAccount,
  };
}
export default useAccountNameEdit;
