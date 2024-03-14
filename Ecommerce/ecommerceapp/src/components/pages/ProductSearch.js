import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductSearch = ({filteredProducts}) => {
  

  return (
    <div className='ms-5'>
      {filteredProducts.map((product) => (
        <div key={product.id}>
          <a><Link to={`/singleproduct/${product.id}`} className='text-decoration-none text-dark'  >
            <img src={product.image} width={50} height={50} className='ms-1'/>
          <span className='ms-1'>{product.pname}</span>
          <span className='ms-1'>Price: ${product.price}</span>
          </Link></a>
        </div>
      ))}
    </div>
  );
};

export default ProductSearch;
