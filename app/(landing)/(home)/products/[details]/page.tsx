import ProductDetailsPage from '@/components/home/products-details';
import React from 'react';

const ProductDetails = (details:any) => {
   
      const title = details.params.details
    return (
        <div>
         <ProductDetailsPage title ={title}/>
        </div>
    );
};

export default ProductDetails;