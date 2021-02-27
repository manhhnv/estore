import React from 'react';
import * as products from './data.json';
import ProductListLayout from 'estore/components/ProductListLayout';

const ProductFlashSale = () => {
    return (
        <ProductListLayout products={products.items} />
    )
}
export default ProductFlashSale;