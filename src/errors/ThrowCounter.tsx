import React, { useState } from 'react';

export function ThrowCounter(prop: { shouldThrow?: boolean } = { shouldThrow: false }) {
  const [count, setCount] = useState(0);
  const increment = () => {
    const nextCount = count + 1;
    setCount(nextCount);
  };

  return (<button
    type="button"
    onClick={increment}>
    {prop.shouldThrow && count === 5 ? new Error('There\'s nothing behind 4') : ''}
    {count}
  </button>);
}
