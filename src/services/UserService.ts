import getQueryString from '@utils/getQueryString';
import axiosInstance from 'src/api/instance';
import { IUser, IUserSetting } from 'src/types/user';

const UserService = {
  userQueryOptions: {
    staleTime: 3 * 60 * 1000,
    keepPreviousData: true,
  },

  usersQueryConverter(key: string) {
    switch (key) {
      case 'page':
        return '_page';
      case 'limit':
        return '_limit';
      case 'isActive':
        return 'is_active';
      case 'isStaff':
        return 'is_staff';
      case 'search':
        return 'q';
      default:
        return key;
    }
  },

  async getUsers(params: Record<string, string | number | string[]>) {
    const { data, headers } = await axiosInstance({ bearer: true }).get<IUser[]>(
      `users?${getQueryString(params, this.usersQueryConverter)}`
    );

    return { data, totalLength: Number(headers?.['x-total-count'] ?? 0) };
  },

  async getUserSettings(params: Record<string, string | number | boolean | string[]>) {
    const { data, headers } = await axiosInstance({ bearer: true }).get<IUserSetting[]>(
      `userSettings?${getQueryString(params, this.usersQueryConverter)}`
    );

    return { data, totalUserSettingLength: Number(headers?.['x-total-count'] ?? 0) };
  },

  async getUserById({ id }: { id: number }) {
    const res = await axiosInstance({ bearer: true }).get<IUser[]>(`/users/${id}`);

    return res.data;
  },
};
export default UserService;
