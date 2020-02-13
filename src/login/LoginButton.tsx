import React from 'react';

export default function LoginButton(props: {onClick: () => void, disabled: boolean}) {
    return (<button
      className={'btn'}
      onClick={props.onClick}
      disabled={props.disabled}>
      Login
    </button>)
}
