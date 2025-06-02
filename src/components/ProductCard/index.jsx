import React from 'react';
import { Link } from 'react-router-dom';

const CardProduct = ({
  image,
  originalPrice,
  salePrice,
  name,
  description,
  discount,
}) => {
  return (
    <Link
      to="#"
      className="w-[24%] m-1 p-1 !bg-white group  rounded !no-underline hover:border-1 hover:border-orange-600 hover:shadow-lg transition-shadow relative"
    >
      <div className="relative">
        <img src={image} alt={name} className="w-full h-auto object-cover" />
        
      </div>
      <div className="p-2">
        <div className="flex items-center space-x-2 mb-1">
          <span className="!text-green-900 line-through">{originalPrice}</span>
          <span className="text-orange-500 !no-underline font-semibold">{salePrice}</span>
        </div>

        <h5 className="text-md !font-bold !no-underline !text-green-800 truncate">
          {name}
        </h5>

        <p className="text-sm m-0 text-gray-600 line-clamp-3">
          {description}
        </p>
      </div>

      {discount && (
        <div className="absolute top-2 right-2 bg-orange-500 text-white text-md font-semibold px-2 py-1 rounded">
          {discount}
        </div>
      )}
    </Link>
  );
};

export default CardProduct;
