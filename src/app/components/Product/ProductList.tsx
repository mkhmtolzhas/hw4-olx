// ProductList.tsx
'use client'
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import ProductItem from './ProductItem';
import { ProductItemProps } from './Types';

const fetchProduct = async (): Promise<ProductItemProps[]> => {
    const { data } = await axios.get('https://fakestoreapi.com/products?limit=8');
    return data;
}

const ProductList: React.FC = () => {
    const { data, isError, isLoading } = useQuery<ProductItemProps[], Error>('products', fetchProduct);

    if (isLoading) {
      return <h3>Loading...</h3>;
    }

    if (isError) {
      return <h3>Error</h3>;
    }

    return (
      <div className="w-full max-w-6xl mx-auto py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Our Products</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.map(product => (
            <ProductItem key={product.id} {...product} />
          ))}
        </div>
      </div>
    );
}

export default ProductList;
