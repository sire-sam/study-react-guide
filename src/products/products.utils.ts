import filter from 'lodash/fp/filter';
import path from 'lodash/fp/path';
import reduce from 'lodash/fp/reduce';
import cloneDeep from 'lodash/fp/cloneDeep';
import { ProductInterface } from './product.interface';

export const onlyStocked = filter(path('stocked'));

export const nameMatch = (match: string) =>
  (item: { name: string }) =>
    item.name.toLowerCase().includes(match.toLowerCase());

export const firstOfCat = reduce<ProductInterface, ProductInterface[]>(function (acc, current) {
  const previousCat = acc[acc.length - 1] && acc[acc.length - 1].category;
  current.firstInCat = !previousCat || previousCat !== current.category;
  acc.push(current);
  return acc;
});

export const filteredList = (value: string, onlyInStock: boolean, productList: ProductInterface[]) => {
  let list = onlyInStock ? onlyStocked(productList) : cloneDeep(productList);
  if (value.length) {
    list = filter(nameMatch(value), list);
  }
  return firstOfCat([], list);
};

