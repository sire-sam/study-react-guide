import React from 'react';

export function ListItem(props: { name: string, price: number, stocked: boolean }) {
  return (
    <tr>
      <td className={props.stocked ? '' : 'product-name__out-of-stock'}>
        {props.name}
      </td>
      <td>
        ${props.price.toFixed(2)}
      </td>
    </tr>
  );
}
