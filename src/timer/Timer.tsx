import React from 'react';

const Timer = () => {
  return (
    <span className="timer">
      {new Date().toLocaleTimeString()}
    </span>
  )
}

export default Timer;
