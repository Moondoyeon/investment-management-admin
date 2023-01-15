import axios, { AxiosError, AxiosResponse } from 'axios';
import CookieToken from 'src/repositories/CookieTokenRepository';

const DEFAULT_CONFIG = {
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
};

const instance = axios.create(DEFAULT_CONFIG);
const bearerInstance = axios.create(DEFAULT_CONFIG);

instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => error.response
);
bearerInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (errror: AxiosError) => errror.response
);

const axiosInstance = ({ bearer }: { bearer: boolean }) => {
  if (!bearer) return instance;

  bearerInstance.defaults.headers.common.Authorization = `Bearer ${CookieToken.get()}`;
  return bearerInstance;
};

export default axiosInstance;
