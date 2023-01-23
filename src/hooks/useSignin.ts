/* eslint-disable no-console */
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import CookieToken from 'src/repositories/CookieTokenRepository';
import AuthService from 'src/services/AuthService';
import { showModal } from 'src/store/alertModalSlice';
import { IAuthResponse } from 'src/types/auth';

const ERROR_MSG = {
  userNotFound: '가입되지 않은 계정입니다.',
  incorrectPassword: '비밀번호가 올바르지 않습니다.',
};
const SERVER_ERROR_MSG = {
  userNotFound: 'Cannot find user',
  incorrectPassword: 'Incorrect password',
};

const handleError = (data: IAuthResponse | string) => {
  if (data === SERVER_ERROR_MSG.userNotFound) throw new Error(ERROR_MSG.userNotFound);
  if (data === SERVER_ERROR_MSG.incorrectPassword) throw new Error(ERROR_MSG.incorrectPassword);
};

function useSignin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();

  const { mutate } = useMutation((data: { email: string; password: string }) => AuthService.signin(data), {
    onSuccess: (data) => {
      handleError(data);
      CookieToken.set(data.accessToken);
      // console.log(CookieToken.get());
      router.replace('/');
    },
    onError: (error: Error) => {
      dispatch(showModal(error.message));
    },
  });

  const isEmailValid = !!email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  const isPasswordValid = password.length >= 4;
  const isAuthValid = isEmailValid && isPasswordValid;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ email, password });
  };

  return { email, password, isAuthValid, handleEmailChange, handlePasswordChange, handleSubmit };
}

export default useSignin;
