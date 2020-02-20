import React, { ReactNode } from 'react';

export function List(props: { children: ReactNode }) {
  return (
    <table>
      <thead>
      <tr>
        <th>
          Name
        </th>
        <th>
          Price
        </th>
      </tr>
      </thead>
      <tbody>
      {props.children}
      </tbody>
    </table>
  );
}
