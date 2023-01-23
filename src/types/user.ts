export interface IUser {
  id: number;
  uuid: string;
  photo: string;
  name: string;
  email: string;
  age: number;
  gender_origin: number;
  birth_date: string;
  phone_number: string;
  address: string;
  detail_address: string;
  last_login: string;
  created_at: string;
  updated_at: string;
}
export interface IUserSetting {
  id: number;
  uuid: string;
  allow_marketing_push?: boolean;
  allow_invest_push?: boolean;
  is_active?: boolean;
  is_staff?: boolean;
  created_at: string;
  updated_at: string;
}

// {
//   id: 1,
//   uuid: '0b6286c0-cf83-4c95-b448-e2dda970ceda',
//   photo: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/824.jpg',
//   name: 'Megan 설',
//   email: '31@hanmail.net',
//   age: 47,
//   gender_origin: 1,
//   birth_date: '1982-01-11T20:23:57.366Z',
//   phone_number: '010-2804-9211',
//   address: 'Germany 용산구',
//   detail_address: '9439 대명면 Apt. 617',
//   last_login: '2022-04-08T02:36:56.972Z',
//   created_at: '2019-07-26T17:17:25.946Z',
//   updated_at: '2019-08-18T01:56:08.433Z'
// }

// {
//   "id":64877,
//   "uuid":"0b6286c0-cf83-4c95-b448-e2dda970ceda",
//   "allow_marketing_push":false,
//   "allow_invest_push":true,
//   "is_active":false,
//   "is_staff":true,
//   "created_at":"2022-06-13T15:13:49.639Z",
//   "updated_at":"2022-04-20T14:48:28.024Z"
// }
