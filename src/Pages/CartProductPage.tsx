/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import HandleQuantityProduct from '../components/Event/HandleQuantityProduct'
import { useAppDispatch, useAppSelector } from '../hooks';
import { selectProduct } from '../redux/rootSlice';


const CartProductPage = () => {
  const dispatch = useAppDispatch();
  const [quanlity, setQuanlity] = useState(1);
  const selectProducts = useAppSelector(selectProduct)
  return (
    <div className='flex flex-col gap-[80px] items-center'>
      <p className='leading-[45px] font-medium text-[32px] text-left w-full'>CART</p>
      <div className='flex flex-row gap-[40px] items-start'>
        <div className='flex flex-col gap-[48px]'>
          <div className='flex flex-col gap-[0px] items-center'>
            <div className='flex flex-row gap-[10px] py-[10px] border-solid border-b-[1px] border-black'>
              <p className='text-center font-bold text-[18px] w-[560px]'>Product</p>
              <p className='text-center font-bold text-[18px] w-[114px]'>Quantity</p>
              <p className='text-center font-bold text-[18px] w-[74px]'>Price</p>
              <p className='text-left font-bold text-[18px] w-[75px]'>Subtotal</p>
              <p className='w-[85px]'></p>
            </div>
            <div>
              {selectProducts.map((item) => {
                return (
                  <div className='flex flex-row gap-[10px] py-[24px] border-solid border-b-[1px] border-black justify-between w-[948px] items-center'>
                    <div className='flex flex-row items-start gap-[16px] w-[560px]'>
                      <div className='w-[130px] h-[130px] object-contain overflow-hidden'>
                        <img src={item.productImg[0]} alt="" />
                      </div>
                      <div className='text-[20px] font-medium text-left leading-[28px] w-[]'>{item.productName}</div>
                    </div>
                    <HandleQuantityProduct quanlity={quanlity} setQuanlity={setQuanlity} />
                    <div className='text-[18px] text-center w-[74px] leading-[74px]'>{item.currentPrice}</div>
                    <div className='text-[18px] text-center w-[74px] leading-[75px]'>{item.currentPrice * item.quanlity}</div>
                    <a className='text-[18px] text-center w-[74px] leading-[90px] text-[#6E706E]'>Delete</a>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='Btn_secondary w-fit'>Clear Cart</div>
        </div>
        <div className='flex flex-col gap-[24px] items-center pt-[48px]'>
          <div className='flex flex-col gap-[0px] items-center'>
            <div className='flex flex-row justify-between w-[340px] py-[24px] border-solid border-y-[1px] border-[#6E706E]'>
              <div className='text-[18px] text-right leading-[25px] text-black font-medium' >SubTotal</div>
              <div className='text-[18px] text-right leading-[25px] text-[#6E706E] font-normal'>$17,830</div>
            </div>
            <div className='flex flex-row justify-between w-[340px] py-[24px] border-solid border-b-[1px] border-[#6E706E]'>
              <div className='text-[18px] text-right leading-[25px] text-black font-medium'>Tax(incl--%)</div>
              <div className='text-[18px] text-right leading-[25px] text-[#6E706E] font-normal'>Free</div>
            </div>
            <div className='flex flex-row justify-between w-[340px] py-[24px] border-solid border-b-[1px] border-[#6E706E]'>
              <div className='text-[18px] text-right leading-[25px] text-black font-medium'>Total Amount</div>
              <div className='text-[18px] text-right leading-[25px] text-[#6E706E] font-normal'>$17,830</div>
            </div>
          </div>
          <div className='flex flex-col gap-[16px] items-center'>
            <button className='Btn_primary w-[271px]'>TO PURCHASE PROCEDURE</button>
            <button className='Btn_secondary w-[271px]'>BACK TO SHOPPING</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartProductPage