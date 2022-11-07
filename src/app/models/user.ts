export interface User {
  id?: number;
  email: string;
  password: string;
}

export type UserDTO = Pick<User, 'email' | 'password'>;

export type UserResponse = Pick<User, 'email' | 'id'>;
