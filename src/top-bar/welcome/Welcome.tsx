import React from 'react';

const Welcome = (props: { name: string, className: string }) => {
  return (
    <p className={props.className}>Hello, {props.name}</p>
  );
};

export default Welcome;
