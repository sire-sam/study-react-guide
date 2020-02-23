import React, { ChangeEvent } from 'react';

export function SearchBar(props: {
  query: string,
  onlyInStock?: boolean,
  onQueryChange: (value: string) => void,
  onInStockChange: (onlyInStock: boolean) => void,
}) {
  const { query, onlyInStock, onInStockChange, onQueryChange } = props;
  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    onQueryChange(e.target.value);
  };
  const handleOnlyInStock = (e: ChangeEvent<HTMLInputElement>) => {
    onInStockChange(e.target.checked);
  };
  return (
    <form>
      <fieldset>
        <label>
          Search
        </label>
        <input
          type="text"
          value={query}
          onChange={handleValue}
          placeholder="Iphone, Football, boat, ..."
        />
        <label>
          <input
            type="checkbox"
            checked={onlyInStock}
            onChange={handleOnlyInStock}/>
          Only show products in stock
        </label>
      </fieldset>
    </form>
  );
}
