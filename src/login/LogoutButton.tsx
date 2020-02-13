import React from 'react';

export default function LogoutButton(props: { onClick: () => void }) {
  return (<button
    className={'btn'}
    onClick={props.onClick}>
    Logout
  </button>)
}
