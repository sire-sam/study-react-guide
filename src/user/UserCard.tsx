import React from 'react';
import Avatar from './Avatar';
import { UserInterface } from './user.interface';

const UserCard = (props: { user: UserInterface, className?: string }) => {
  return (
    <div className={`user-card ${props.className}`}>
      <Avatar user={props.user} className="avatar--large"/>
      <div className="user-card__name">
        {props.user.name}
      </div>
    </div>
  );
};

export default UserCard;
