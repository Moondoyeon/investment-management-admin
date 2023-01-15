import { AxiosResponse } from 'axios';
import axiosInstance from 'src/api/instance';
import { IAuthLogin, IAuthResponse } from 'src/types/auth';

const AuthService = {
  async signin({ email, password }: IAuthLogin) {
    const res = await axiosInstance({ bearer: false }).post<IAuthResponse, AxiosResponse<IAuthResponse>, IAuthLogin>(
      '/login',
      { email, password }
    );
    return res.data;
  },
};
export default AuthService;
