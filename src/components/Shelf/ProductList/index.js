import React from 'react';

import Product from './Product';

const ProductList = (props) => {
  return props.products.map(p => {
    return <Product product={p} key={p.id} hoverId={props.hoverId} handleMouseHover={(e) => props.handleMouseHover(e)} />;
  });
};

export default ProductList;
