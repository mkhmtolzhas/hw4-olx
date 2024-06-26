// ProductList.tsx
'use client'
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import ProductItem from './ProductItem';
import { ProductItemProps } from './Types';
import Loading from '../OnFetch/Loading';
import Error from '../OnFetch/Error';
import axiosInstance from '../../../../api/axiosInstance';

const fetchProduct = async (): Promise<ProductItemProps[]> => {
    const { data } = await axiosInstance.get('/products?limit=8');
    return data;
}

const ProductList: React.FC = () => {
    const { data, isError, isLoading } = useQuery<ProductItemProps[], Error>('products', fetchProduct);

    if (isLoading) {
      return <Loading />;
    }

    if (isError) {
      return <Error />;
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
