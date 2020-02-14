import React from 'react';
import { UserInterface } from './user.interface';

const Avatar = (props: { user: UserInterface }) => {
  return (
    <img className="Avatar"
         src={props.user.avatarUrl}
         alt={props.user.name}
    />
  );
};

export default Avatar;
