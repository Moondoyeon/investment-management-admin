export interface IAuthLogin {
  email: string;
  password: string;
}

export interface IAuthResponse {
  accessToken: string;
  user: {
    email: string;
    id: number;
  };
}
