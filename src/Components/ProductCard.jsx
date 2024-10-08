import React from 'react';

const ProductCard = ({ product, handleIncrease, quantity, handleDecrease }) => {
 console.log("Quantity of product is ",quantity)
 console.log("Product is ",product)
  return (
    <div className='border h-fit p-4 flex flex-col gap-[4px] rounded-lg shadow-lg bg-white'>
  <div className='w-full flex flex-col gap-[2px]'>
  <span className='text-[14px] font-semibold'>{product.name}</span>
  <div className='flex gap-2 py-2'>
  <span className='text-[10px] font-semibold'>Target  {product.requiredQty}</span>
  <span className='text-[10px] font-semibold'>Quantity  {product.currentQty}</span>
 
  </div>
   </div>
      <div className='flex justify-between items-center'>
        <span className='text-[10px] font-semibold'>${product.amount.toFixed(2)}/unit</span>
        <div className='flex items-center gap-2 rounded-sm border-slate-400 border-[1px] outline-none'>
          
          <button
            onClick={() => {
                if (quantity === 0) return;
                handleDecrease(product.id);
            }}
            className=' text-black px-1 py-0.5 rounded-md text-[14px] '
          >
            -
          </button>
          <span className='text-[14px] font-semibold'>{quantity === 0 ||!quantity ? 'Add' : quantity}</span>
          <button
            onClick={() => handleIncrease(product.id, product.amount)}
            className=' text-black px-1 py-0.5 rounded-md text-[14px]   '
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
