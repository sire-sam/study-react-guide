import React from 'react';

export function BoilingPoint(prop: { celsius: number }) {
  if (prop.celsius > 100) {
    return <p>Beyond boiling point</p>;
  }
  if (prop.celsius === 100) {
    return <p>Boiling point</p>;
  }
  return <p>Above boiling point</p>;
}
