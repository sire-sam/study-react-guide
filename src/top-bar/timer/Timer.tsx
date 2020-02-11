import React from 'react';

const Timer = (prop: {label: string}) => {
  return (
    <span className="timer">
      {prop.label} {new Date().toLocaleTimeString()}
    </span>
  )
}

export default Timer;
