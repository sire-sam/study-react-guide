import React from 'react';

export function ListCategory(props: { name: string }) {
  return (
    <tr>
      <th colSpan={2}>
        {props.name}
      </th>
    </tr>
  );
}
