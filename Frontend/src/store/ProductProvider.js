import { useReducer } from 'react';

import ProductsContext from './products-context';

const defaultProductsState = {
  items: [],
};

const productsReducer = (state, action) => {
  if (action.type === 'ADD') 
  {
    updatedItems = state.items.concat(action.item);

    return {
      items: updatedItems,
    };
  }

  if (action.type === 'REMOVE') {
    return {
      items: [],
    };
  }

  return defaultProductsState;
};

const ProductsProvider = (props) => {
  const [productstState, dispatchProductsAction] = useReducer(
    productsReducer,
    defaultProductsState
  );

  const addItemsProductHandler = (item) => {
    dispatchProductsAction({ type: 'ADD', item: item });
  };

  const removeItemsProductHandler = () => {
    dispatchProductsAction({ type: 'REMOVE'});
  };

  const productsContext = {
    items: productstState.items,
    totalAmount: productstState.totalAmount,
    addItems: addItemsProductHandler,
    removeItems: removeItemsProductHandler,
  };

  return (
    <ProductsContext.Provider value={productsContext}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
