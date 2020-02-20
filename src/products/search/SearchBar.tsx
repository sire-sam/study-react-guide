import React, { ChangeEvent, useState } from 'react';

export function SearchBar(props: { value: string, onlyInStock?: boolean, onChange: (value: string, onlyInStock: boolean) => void }) {
  const [value, setValue] = useState(props.value);
  const [onlyInStock, setOnlyInStack] = useState(props.onlyInStock || false);
  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(e.target.value);
    props.onChange(value, onlyInStock);
  };
  const handleOnlyInStock = (e: ChangeEvent<HTMLInputElement>) => {
    const onlyInStock = e.target.checked;
    setOnlyInStack(e.target.checked);
    props.onChange(value, onlyInStock);
  };
  return (
    <form>
      <fieldset>
        <label>
          Search
        </label>
        <input
          type="text"
          value={value}
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
