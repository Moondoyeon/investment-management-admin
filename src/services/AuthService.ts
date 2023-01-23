import { AxiosResponse } from 'axios';
import axiosInstance from 'src/api/instance';
import { IAuthLogin, IAuthResponse } from 'src/types/auth';

const AuthService = {
  async signin({ email, password }: IAuthLogin) {
    const signup = await axiosInstance({ bearer: false }).post<IAuthResponse, AxiosResponse<IAuthResponse>, IAuthLogin>(
      '/users/signup',
      { email, password }
    );

    const res = await axiosInstance({ bearer: false }).post<IAuthResponse, AxiosResponse<IAuthResponse>, IAuthLogin>(
      '/login',
      { email, password }
    );
    if (signup.data === res.data) return res.data;
  },
};
export default AuthService;
