export interface UserForRegister {
  UserName: string;
  Email: string;
  Password: string;
    PasswordKey: string;
  Contactno: string;
}

export interface UserForLogin {
  userName: string;
  Password: string;
 // token: string;
}
