import React from 'react';
import { UserInterface } from './user.interface';

const Avatar = (props: { user: UserInterface, className?: string }) => {
  return (
    <img className={`avatar ${props.className ? props.className : ''}`}
         src={props.user.avatarUrl}
         alt={props.user.name}
    />
  );
};

export default Avatar;
