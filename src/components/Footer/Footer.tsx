import React from 'react'
import IconCostic from '../../utils/icon/IconCostic'
import IconFacebook from '../../utils/icon/IconFacebook'
import IconInsta from '../../utils/icon/IconInsta'
import IconX from '../../utils/icon/IconX'
import IconYoutube from '../../utils/icon/IconYoutube'

const Footer = () => {
  return (
    <div className='flex flex-row justify-between pr-[128px] pl-[128px] pt-[80px] pb-[80px] bg-black w-full mx-[0px]'>
      <div className='flex flex-col items-center gap-[32px]'>
        <IconCostic />
        <div className='flex flex-row gap-[16px] items-center'>
          <IconFacebook />
          <IconInsta />
          <IconX />
          <IconYoutube />
        </div>
      </div>
      <div className='flex flex-col gap-[16px] '>
        <a className='text-[20px] medium text-white' href="">Home</a>
        <a className='text-[20px] medium text-white' href="">About Us</a>
        <a className='text-[20px] medium text-white' href="">Contact</a>
        <a className='text-[20px] medium text-white' href="">Shop</a>
        <a className='text-[20px] medium text-white' href="">Blog</a>
        <a className='text-[20px] medium text-white' href="">Track Order</a>
      </div>
      <div className='flex flex-col gap-[32px] items-start '>
        <div className='text-[24px] text-white'>Contact Us</div>
        <div className='flex flex-col gap-[8px] items-start'>
          <div className='text-[18px] leading-[auto] text-white'>example@hexfashion.com</div>
          <div className='text-[18px] leading-[auto] text-white'>02083483945</div>
        </div>
      </div>
    </div>
  )
}

export default Footer