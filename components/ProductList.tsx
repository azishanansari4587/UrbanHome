
import React from 'react'
import ProductCard from './ProductCard'
import { getProducts } from '@/lib/actions';

const ProductList = async () => {
    const products = await getProducts();
  
    return (
      <div className="flex flex-col items-center gap-10 py-8 px-5 sm:grid-cols-2">
        <p className="text-heading2-bold">New Arrival</p>
        {!products || products.length === 0 ? (
          <p className="text-body-bold">No products found</p>
        ) : (
          
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product: ProductType) => (
              <ProductCard key={product._id} product={product}/>
            ))}
          </div>
        )}
      </div>
    );
  };

export default ProductList;
