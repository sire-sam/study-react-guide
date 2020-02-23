import React, { useState } from 'react';
import Avatar from '../../user/Avatar';
import { UserInterface } from '../../user/user.interface';

interface LoggedUserPropsInterface {
  onRequestLogout: () => void,
  user: UserInterface
}

export function LoggedUser({user, onRequestLogout}: LoggedUserPropsInterface) {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="popover-area">
      <button className="btn-hit-area" type="button" onClick={toggle}>
        <Avatar
          className="action-bar__icon"
          user={user}/>
      </button>
      {
        isOpen &&
        <div className="emphasis popover">
          <button
            className={'btn'}
            onClick={onRequestLogout}>
            Logout
          </button>
        </div>
      }
    </div>
  );

}
