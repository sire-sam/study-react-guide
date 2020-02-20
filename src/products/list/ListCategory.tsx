import React from 'react';

export function ListCategory(props: { name: string }) {
  return (
    <tr>
      <td colSpan={2}>
        {props.name}
      </td>
    </tr>
  );
}
