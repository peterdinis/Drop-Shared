import { UserCredential, User } from 'firebase/auth';
import { ReactNode } from 'react';

export interface AuthContextType {
  currentUser: User | null;
  login: (credentials: EmailAndPasswordCredentials) => Promise<UserCredential>;
  register: (credentials: EmailAndPasswordCredentials) => Promise<UserCredential>;
  logout: () => Promise<void>;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export interface Unsubscribe {
  (): void;
}

export interface EmailAndPasswordCredentials {
  email: string;
  password: string;
}