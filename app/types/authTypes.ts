import { UserCredential, User } from 'firebase/auth';
import { ReactNode } from 'react';

export type AuthContextType = {
  currentUser: User | null;
  login: (credentials: EmailAndPasswordCredentials) => Promise<UserCredential>;
  register: (
    credentials: EmailAndPasswordCredentials,
  ) => Promise<UserCredential>;
  logout: () => Promise<void>;
};

export type AuthProviderProps = {
  children: ReactNode;
};

export type Unsubscribe = {
  (): void;
};

export type EmailAndPasswordCredentials = {
  email: string;
  password: string;
};
