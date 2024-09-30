export interface UserForRegister {
    userName: string;
    email: string;
    password: string;
    mobile: number;
}

export interface UserForRegister2 {
  userName: string;
  email?: string;
  password: string;
  mobile?: number;
}

export interface UserForLogin {
  userName: string;
  token: string;
}
