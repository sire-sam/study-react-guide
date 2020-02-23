import React, { useContext, useState } from 'react';
import { LoggedUser } from './LoggedUser';
import Login from './Login';
import { UserContext } from '../../user/user.context';
import { UserInterface } from '../../user/user.interface';

export function LoginControl() {
  const loginDelay = 1000;
  const [loading, setLoading] = useState(false);
  const userContext = useContext(UserContext);

  function onUserLoggedIn(user: UserInterface) {
    userContext.setUser(user);
    userContext.setLoggedIn(true);
    setLoading(false);
  }

  function login(name: string) {
    setLoading(true);
    window.setTimeout(() => onUserLoggedIn({
      name,
      avatarUrl: 'https://placekitten.com/g/64/64',
    }), loginDelay);
  }

  function logout() {
    userContext.setLoggedIn(false);
  }

  return userContext.isLoggedIn
    ? (<LoggedUser onRequestLogout={logout} user={userContext.user as UserInterface}/>)
    : (<Login onSubmit={login} disabled={loading}/>);
}
