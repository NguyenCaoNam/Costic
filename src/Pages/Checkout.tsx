import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { images } from '../utils/constants';
import { useAppSelector } from '../hooks';
import { toastCheckoutSuccess } from '../utils/plugins/Toast';

const Checkout = () => {
  const [totalAmount, setTotalAmount] = useState(0)
  const [coupon, setCoupon] = useState('')
  const [messageCoupon, setMessageCoupon] = useState('')
  const [isCoupon, setIsCoupon] = useState(false)
  const [couponCode,] = useState("costic")

  const navigation = useNavigate();

  const schema = yup.object().shape({
    username: yup.string().required("Please enter username"),
    email: yup.string().email().required("Please enter email address"),
    mobileNumber: yup.string().required("Please enter mobile number"),
    town: yup.string().required("Please enter town"),
    city: yup.string().required("Please enter city"),
    address: yup.string().required("Please enter address"),
  })

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  })

  const listProduct = useAppSelector(state => state.root.product)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    toastCheckoutSuccess();
    navigation('/')
    reset();
  }

  const handleChangeCoupon = (value: string) => {
    setCoupon(value)
    setMessageCoupon('')
  }
  const handleCoupon = () => {
    setTimeout(() => {
      if (coupon !== couponCode) {
        setMessageCoupon('Coupon is invalid')
        setIsCoupon(false)
      } else {
        setMessageCoupon('')
        setIsCoupon(true)
      }
    }, 500);
  }

  useEffect(() => {
    const total = listProduct?.reduce((acc, product) => {
      return acc + product.currentPrice * product.quanlity;
    }, 0);
    setTotalAmount(total)
  }, [listProduct])

  return (
    <div>
      <h1 className='leading-[45px] font-medium text-[32px] mb-8'>Checkout</h1>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-start-1 col-end-5 ">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3" id='hook-form'>
            <div className='flex flex-col gap-[8px] items-start'>
              <div className="text-base text-medium leading-[22px]">Your Name</div>
              <input {...register("username")}
                className='Input w-full'
                type="text"
                placeholder='Type your name' />
              <p className='text-red-500'>{errors.username?.message}</p>
            </div>
            <div className='flex flex-row gap-3'>
              <div className='flex flex-col flex-1 gap-2'>
                <div className="text-base text-medium leading-[22px]">Mobile Number</div>
                <input {...register("mobileNumber")}
                  className='border rounded-[30px] py-3 px-4 border-black text-base leading-normal'
                  type="text"
                  placeholder='Type your mobile number' />
                <p className='text-red-500'>{errors.mobileNumber?.message}</p>
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <div className="text-base text-medium leading-[22px]">Email Address</div>
                <input {...register("email")}
                  className="border rounded-[30px] py-3 px-4 border-black text-base leading-normal"
                  placeholder="Type your email address" />
                <p className="text-red-500">{errors.email?.message}</p>
              </div>
            </div>
            <div className='flex flex-row gap-3'>
              <div className='flex flex-col flex-1 gap-2'>
                <div className="text-base text-medium leading-[22px]">Town</div>
                <input {...register("town")}
                  className='border rounded-[30px] py-3 px-4 border-black text-base leading-normal'
                  type="text"
                  placeholder='Type your town' />
                <p className='text-red-500'>{errors.town?.message}</p>
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <div className="text-base text-medium leading-[22px]">City</div>
                <input {...register("city")}
                  type="text"
                  className="border rounded-[30px] py-3 px-4 border-black text-base leading-normal"
                  placeholder="Type your city" />
                <p className="text-red-500">{errors.city?.message}</p>
              </div>
            </div>
            <div className='flex flex-col gap-2 items-start'>
              <div className="text-base text-medium leading-[22px]">Address</div>
              <input {...register("address")}
                className='Input w-full'
                type="text"
                placeholder='Type your address' />
              <p className='text-red-500'>{errors.address?.message}</p>
            </div>
            <div className='flex flex-col gap-2 items-start'>
              <div className="text-base text-medium leading-[22px]">Order Note</div>
              <textarea
                className='Input w-full h-32 resize-none'
                placeholder='Type your order note' />
            </div>
          </form>
        </div>
        <div className="col-start-5 col-end-7">
          <div>
            <div className={`${messageCoupon ? 'mb-2' : 'mb-8'} mt-8 flex flex-row items-center gap-6`}>
              <input
                className='border rounded-[30px] py-3 px-4 border-black text-base leading-normal'
                type="text"
                placeholder='Coupon'
                onChange={(e) => handleChangeCoupon(e.target.value)} />

              <button disabled={!coupon && true} className={`text-green-700 text-base cursor-pointer ${!coupon && 'opacity-45'}`}
                onClick={handleCoupon}>Apply Now</button>
            </div>
            {
              messageCoupon && <p className='mt-1 mb-4 text-red-500'>{messageCoupon}</p>
            }
          </div>
          <div className='flex flex-col items-center'>
            <div className='border-solid border-t border-t-[#6E706E]'>
              {listProduct?.map(item => {
                return (
                  <div key={item?.id} className='flex flex-row justify-between mt-5 border-solid border-b border-[#E9EAE9] last:border-none'>
                    <div className='flex flex-row w-11/12 gap-3'>
                      <img src={item.productImg && item.productImg[0]} alt="" className='w-full max-w-14 max-h-14 h-full object-contain' />
                      <div>
                        <div className='text-base font-medium text-left'>{item?.productName}</div>
                        <div className='text-base text-[#6E706E]'>
                          <span className=''>Quanlity: </span>
                          <span>{item?.quanlity}</span>
                        </div>
                      </div>
                    </div>
                    <div className='text-[18px] text-center w-[74px] leading-[75px]'>{item?.currentPrice * item.quanlity}$</div>
                  </div>
                )
              })}
            </div>
            <div className='flex flex-row justify-between w-full py-6 border-solid border-y border-[#6E706E]'>
              <div className='text-[18px] text-right leading-[25px] text-black font-medium' >SubTotal</div>
              <div className='text-[18px] text-right leading-[25px] text-[#6E706E] font-normal'>{totalAmount}$</div>
            </div>
            <div className='flex flex-col gap-6 w-full py-6 border-solid border-b-[1px] border-[#6E706E]'>
              <div className='flex flex-row justify-between'>
                <div className='text-[18px] text-right leading-[25px] text-black font-medium'>Tax(incl--%)</div>
                <div className='text-[18px] text-right leading-[25px] text-[#6E706E] font-normal'>0</div>
              </div>
              <div className='flex flex-row justify-between'>
                <div className='text-[18px] text-right leading-[25px] text-black font-medium'>Shipping Cost</div>
                <div className='text-[18px] text-right leading-[25px] text-[#6E706E] font-normal'>Free</div>
              </div>
              <div className='flex flex-row justify-between'>
                <div className='text-[18px] text-right leading-[25px] text-black font-medium'>Coupon Discount</div>
                <div className='text-[18px] text-right leading-[25px] text-[#6E706E] font-normal'>{isCoupon && 5}$</div>
              </div>
            </div>
            <div className='flex flex-row justify-between w-full py-6 border-solid border-b-[1px] border-[#6E706E]'>
              <div className='text-[18px] text-right leading-[25px] text-black font-medium'>Total Amount</div>
              <div className='text-[18px] text-right leading-[25px] text-[#6E706E] font-normal'>{isCoupon ? totalAmount - 5 : totalAmount}$</div>
            </div>
            <div className='w-full py-6 border-solid border-b-[1px] border-[#6E706E]'>
              <div className='text-[18px] mb-5 leading-[25px] text-black font-medium'>Select Payment Method</div>
              <div className='flex flex-row gap-3'>
                <div className='border rounded-lg cursor-pointer hover:transform text-center flex-1'>Cash Payment</div>
                <div className='border rounded-lg cursor-pointer hover:transform text-center flex-1'>Check Payment</div>
                <div className='border rounded-lg cursor-pointer hover:transform flex-1 flex items-center justify-center'>
                  <img src={images.PAYPAL} alt="" />
                </div>
                <div className='border rounded-lg cursor-pointer hover:transform flex-1 flex items-center justify-center'>
                  <img src={images.STRIPE} alt="" className='w-full' />
                </div>
              </div>
              <div className='flex flex-row mt-5 gap-2'>
                <input type="checkbox" name="" id="" className='w-6 h-6 cursor-pointer' />
                <p className='text-lg font-normal'>I have read and agree to the website <span className='text-orange-500'>term and conditions</span></p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5 gap-base items-center mt-5'>
            <button className='Btn_primary w-full' type='submit' form='hook-form'>CHECKOUT</button>
            <Link to={'/shop'} className='Btn_secondary !w-full text-center'>BACK TO SHOPPING</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
