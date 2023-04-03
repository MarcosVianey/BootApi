import React from 'react';

const ProductsContext = React.createContext({
  items: [],
  addItems: (item) => {},
  removeItems: () => {}
});

export default ProductsContext;