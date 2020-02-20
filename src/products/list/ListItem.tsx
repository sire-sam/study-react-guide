import React from 'react';

export function ListItem(props: { name: string, price: number }) {
  return (
    <tr>
      <td>
        {props.name}
      </td>
      <td>
        ${props.price.toFixed(2)}
      </td>
    </tr>
  );
}
