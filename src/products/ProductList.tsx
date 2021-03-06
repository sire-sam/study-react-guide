import React, { Fragment, useState } from 'react';
import { List } from './list/List';
import { SearchBar } from './search/SearchBar';
import { ListItem } from './list/ListItem';
import { ListCategory } from './list/ListCategory';
import productsData from './products.json';
import { filteredList } from './products.utils';

export function ProductList() {
  const [products, setProducts] = useState(filteredList('', false, productsData));
  const [querySearch, setQuerySearch] = useState('');
  const [onlyInStock, setOnlyInStock] = useState(false);
  const handleQuerySearch = (value: string) => {
    setQuerySearch(value);
    setProducts(filteredList(value, onlyInStock, productsData));
  };
  const handleInStock = (onlyInStock: boolean) => {
    setOnlyInStock(onlyInStock);
    setProducts(filteredList(querySearch, onlyInStock, productsData));
  };
  return (
    <div>
      <SearchBar
        query={querySearch}
        onlyInStock={onlyInStock}
        onQueryChange={handleQuerySearch}
        onInStockChange={handleInStock}/>
      <List>
        {products.map(i => {
          return (
            <Fragment key={i.name + i.firstInCat}>
              {i.firstInCat && <ListCategory name={i.category}/>}
              <ListItem name={i.name} price={i.price} stocked={i.stocked}/>
            </Fragment>
          );
        })}
      </List>
    </div>
  );
}
