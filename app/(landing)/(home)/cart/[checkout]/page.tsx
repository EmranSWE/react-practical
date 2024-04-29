import CheckoutPage from '@/components/home/checkout';
import ProductDetailsPage from '@/components/home/products-details';
import React from 'react';

const Checkout = (details:any) => {
   
      const title = details.params.details
    return (
        <div>
         <CheckoutPage />
        </div>
    );
};

export default Checkout;