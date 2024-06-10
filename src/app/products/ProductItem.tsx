import React from 'react';
import { ProductItemProps } from './Types';

const ProductItem: React.FC<ProductItemProps> = ({ title, category, image = 'https://static.tildacdn.pro/tild3039-3932-4433-b533-613365646663/722bab55-4a08-4e09-a.png', price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={image} alt={title} width={400} height={300} className="w-full h-60 object-cover" />
        <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-500 text-sm mb-4">{category}</p>
            <h4 className="text-lg font-semibold">${price}</h4>
        </div>
    </div>
  );
}

export default ProductItem;
