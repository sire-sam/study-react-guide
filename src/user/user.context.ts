import { createContext } from 'react';
import { UserInterface } from './user.interface';

export interface UserContextInterface {
  isLoggedIn: boolean,
  user?: UserInterface,
  setUser: (user: UserInterface) => void,
  setLoggedIn: (logged: boolean) => void,
}

// noinspection JSUnusedLocalSymbols
export const UserContextDefault: UserContextInterface = {
  isLoggedIn: false,
  setUser: (user: UserInterface) => {
  },
  setLoggedIn: (logged: boolean) => {
  },
};

export const UserContext = createContext<UserContextInterface>(UserContextDefault);
