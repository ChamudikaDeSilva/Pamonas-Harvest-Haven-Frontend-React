import react from 'react';

const CheckoutHeading=()=>{
    return(
        <div className="flex items-center justify-center pl-24 pr-22">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold mb-4 md:mb-6" style={{ 
            textShadow: '1px 1px 0 #15803d, -1px -1px 0 #15803d, 1px -1px 0 #15803d, -1px 1px 0 #15803d' 
          }}>
            Checkout
          </h2>
          <div className="h-px flex-1 bg-green-600 pr-24"></div>
      </div>
    );
};
export default CheckoutHeading;