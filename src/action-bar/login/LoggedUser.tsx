import React, { useState } from 'react';
import Avatar from '../../user/Avatar';
import { UserInterface } from '../../user/user.interface';

interface LoggedUserPropsInterface {
  onRequestLogout: () => void,
  user: UserInterface
}

export function LoggedUser(props: LoggedUserPropsInterface) {
  const [isOpen, setIsOpen] = useState(false);

  function logout() {
    props.onRequestLogout();
  }

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="popover-area">
      <button className="btn-hit-area" type="button" onClick={toggle}>
        <Avatar
          className="action-bar__icon"
          user={props.user}/>
      </button>
      {
        isOpen &&
        <div className="emphasis popover">
          <button
            className={'btn'}
            onClick={logout}>
            Logout
          </button>
        </div>
      }
    </div>
  );

}
